const LAYER_URL = `https://edp.jdev.fr/geoserver/edp/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=arret_eau_p&outputFormat=application/json`;
const LAYER_URL_lin = `https://edp.jdev.fr/geoserver/edp/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=arret_eau_l&outputFormat=application/json`;
const LAYER_ID = "edp_ep";
const RES_CLUSTER = 6;
/**
 * Clusters charts color :
 * - first : EN COURS statut value
 * - second : PREVU statut value
 */
const DONUT_COLORS = ["rgba(255,100,125,1)", "rgba(255,200,150,1)"];
/**
 * Display layer as simple point not clustered
 */
const iconesPath = {
  'EN COURS': {src: "apps/edp_arret_eau/img/travaux_encours.svg", scale: 0.5, opacity: 1},
  'PREVU': {src: "apps/edp_arret_eau/img/travaux_prevu.svg", scale: 0.5, opacity: 1}
};


const uniqueStyle = (feature) => {
  const props = feature.getProperties();
  const categ = props.features[0].getProperties()["statut"];
  const categIcon = iconesPath[categ];
  if(categIcon && props.features[0] && !props.features[0]?.icon) {
      // insert icon path to uniq feature property
      props.features[0].setProperties({icon: categIcon.src});
  };
  return [
      new ol.style.Style({
          image: new ol.style.Icon({
              scale: categIcon?.scale || 0.15,
              opacity: categIcon?.opacity || 0.9,
              src: categIcon?.src ,
          })
      })
]};
/**
 * Points display and grouped as cluster
 * @param {int} radiusBackGround
 * @param {int} radiusChart
 * @param {ing} size
 * @param {object} features - schema => {"EN COURS": [], "PREVU": []}
 * @returns
 */
const clusterStyleExt = (radiusBackGround, radiusChart, size, features) => {
  return [
    new ol.style.Style({
      image: new ol.style.Circle({
        radius: radiusChart,
        fill: new ol.style.Fill({
          color: "white",
        }),
      }),
      stroke: new ol.style.Stroke({
        color: "white",
        width: 3,
      }),
      fill: new ol.style.Fill({
        color: "rgba(0, 0, 255, 0.1)",
      }),
      text: new ol.style.Text({
        font: "bold 12px Barlow, Arial, Sans-serif",
        text: size.toString(),
        fill: new ol.style.Fill({
          color: "#002ddc",
        }),
      }),
    }),

    new ol.style.Style({
      image: new ol.style.Chart({
        type: "donut",
        radius: radiusBackGround,
        displacement: [0, 0],
        data: [
          !_.isEmpty(features["EN COURS"]) ? features["EN COURS"].length : 0,
          !_.isEmpty(features["PREVU"]) ? features["PREVU"].length : 0,
        ],
        colors: DONUT_COLORS,
        rotateWithView: true,
        animation: true,
        stroke: new ol.style.Stroke({
          color: "transparent",
          width: 0,
        }),
      }),
    }),
  ];
};

/**
 * Create features stats usefull for cluster style
 * @param {Array} features schema => [{},{}]
 * @returns
 */
const getStats = (features) => {
  // const typeStop = features.map(f => f.statut);
  const typeStop = {};
  features.forEach((f) => {
    const statut = f.statut;
    if (!typeStop[statut]) typeStop[statut] = [];
    if (typeStop[statut]) typeStop[statut].push(f);
  });
  return typeStop;
};

/**
 * Display layer as cluster
 * @param {object} feature cluster - contains grouped features point
 * @returns
 */
const clusterStyle = function (feature) {
  var size = feature.get("features").length;
  const clusteredFeatures = feature.get("features").map((x) => x.getProperties());
  const clusterStats = getStats(clusteredFeatures);
  var max_radius = 60;
  var max_value = 400;
  var radiusBackGround = 15 + Math.sqrt(size) * (max_radius / Math.sqrt(max_value));
  var radiusChart = (radiusBackGround * 80) / 100;
  let resolution = mviewer.getMap().getView().getResolution();
  if (resolution >= RES_CLUSTER) {
    return clusterStyleExt(radiusBackGround, radiusChart, size, clusterStats);
  } else {
    return uniqueStyle(feature);
  }
};

/**
 * Custom class : ClusterByAttribut
 */
class ClusterByAttribut extends ol.source.Cluster {
  constructor(options) {
    super({
      attributions: options.attributions,
      wrapX: options.wrapX,
      source: options.source,
      distance: options.distance,
      geometryFunction: options.geometryFunction,
    });

    this.attribut = options.attribut;
    this.isCluster = true;
    this.isFilter = false;
    this.maxClusterResolution = options.maxClusterResolution;
  }

  setIsCluster(isCluster) {
    this.isCluster = isCluster;
  }

  cluster() {
    if (this.resolution === undefined || !this.source) {
      return;
    }
    const extent = this.source.getExtent();
    const mapDistance = this.distance * this.resolution;
    const features = this.source.getFeatures();

    /** @type {Object<string, true>} */
    const clustered = {};
    for (let i = 0, ii = features.length; i < ii; i++) {
      const feature = features[i];
      // TODO ==> Display cluster or only one feature
      if (!(ol.util.getUid(feature) in clustered)) {
        const geometry = this.geometryFunction(feature);
        if (geometry) {
          // needed if distance is set
          const coordinates = geometry.getCoordinates();
          ol.extent.createOrUpdateFromCoordinate(coordinates, extent);
          ol.extent.buffer(extent, mapDistance, extent);

          if (this.resolution >= this.maxClusterResolution) {
            let featuresToCluster = this.distance
              ? this.source.getFeaturesInExtent(extent)
              : features;

            if (this.attribut) {
              // if regroup cluster by attribute
              featuresToCluster = featuresToCluster
                .filter(
                  (feature) => feature.get(this.attribut) === feature.get(this.attribut)
                )
                .filter((f) => f.get(this.attribut) === feature.get(this.attribut));
            }
            featuresToCluster.filter(function (neighbor) {
              const uid = ol.util.getUid(neighbor);
              if (uid in clustered) {
                return false;
              }
              clustered[uid] = true;
              return true;
            });
            const clusterWithFeatures = this.createCluster(featuresToCluster, extent);
            clusterWithFeatures.getValuesByField = (field) =>
              clusterWithFeatures.get("features").map((f) => f.get(field));
            clusterWithFeatures.getFeaturesByFieldValue = (field, value) =>
              clusterWithFeatures.get("features").filter((f) => f.get(field) === value);
            this.features.push(clusterWithFeatures);
          } else {
            // don't clusterize -> 1 feature = 1 cluster
            const clusterWithFeatures = this.createCluster([feature], extent);
            this.features.push(clusterWithFeatures);
          }
        }
      }
    }
  }
}

/**
 * vector point source
 */
const pointSource = new ol.source.Vector({
  url: LAYER_URL,
  format: new ol.format.GeoJSON(),
});

/**
 * create vector layer
 */
let layer = new ol.layer.Vector({
  source: new ClusterByAttribut({
    geometryFunction: function (feature) {
      return new ol.geom.Point(ol.extent.getCenter(feature.getGeometry().getExtent()));
    },
    maxClusterResolution: RES_CLUSTER, // display all single feature with resolution < 240
    attribut: "arrondisse", // group cluster by attribute
    // 0 to group by attribute only
    // value to group according to distance
    // will be grouped by attribute in same time if attribut option is not null or empty
    distance: 0,
    source: pointSource,
  }),
  style: clusterStyle,
});

/**
 *
 * @param {object} clusters ol feature
 * @param {object} views map view
 */
const handle = function (clusters, views) {
  if (clusters.length > 0) {
    var l = mviewer.getLayer(LAYER_ID);
    var elements = [];
    var html;
    var panel = "";
    const featuresInCluster = clusters[0].get("features");
    if (featuresInCluster && featuresInCluster.length > 1) {
      const view = mviewer.getMap().getView();
      const clusterExtent = ol.extent.createEmpty();
      featuresInCluster.forEach((feature) => {
        ol.extent.extend(clusterExtent, feature.getGeometry().getExtent());
      });
      var bufferedExtent = ol.extent.buffer(
        clusterExtent,
        ol.extent.getWidth(clusterExtent) / 1.5
      );
      view.fit(bufferedExtent, { duration: 500, padding: [50, 50, 50, 50] });
      return;
    } else {
      clusters.forEach((c) => {
        // ICI ON CREER MANUELLEMENT LES FEATURES POUR MUSTACHE ET LE TEMPLATE POUR V3.5 ET ANTERIEUR
        if (c?.properties) {
          // v<3.5
          elements = elements.concat(
            c.properties.features.map((d) => ({
              properties: d.getProperties(),
            }))
          );
        } else {
          // v>=3.5
          elements = elements.concat(
            c?.getProperties()?.features || c.properties.features
          );
        }
      });
    }
    // Création du HTML à partir du template et des features issues de la manipulation des données
    if (l.template) {
      html = info.templateHTMLContent(elements, l);
    } else {
      html = info.formatHTMLContent(elements, l);
    }
    // force l'affichage selon le mode mobile ou desktop
    if (configuration.getConfiguration().mobile) {
      panel = "modal-panel";
    } else {
      panel = "right-panel";
    }
    var view = views[panel];
    view.layers.push({
      id: view.layers.length + 1,
      firstlayer: true,
      manyfeatures: elements.length > 1,
      nbfeatures: elements.length,
      name: l.name,
      layerid: LAYER_ID,
      theme_icon: l.icon,
      html: html,
    });
  }
};

new CustomLayer(LAYER_ID, layer, {}, handle);
