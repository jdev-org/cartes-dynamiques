const GEOLOC_ZOOM = 16;

// icon geoloc feature style
const iconFeatureStyle = new ol.style.Style({
  image: new ol.style.Icon({
    src: "img/legend/hiking_custom.png",
  }),
});

/**
 * Create vector layer
 */
const layerPositionSrc = new ol.source.Vector();
const layerPosition = new ol.layer.Vector({
  source: layerPositionSrc,
  id: "geolocateme",
});

/**
 * Add layer if needed
 */
const findOrAddLayer = () => {
  if (
    _.isEmpty(
      mviewer
        .getMap()
        .getLayers()
        .getArray()
        .find((lyr) => lyr.get("id") === layerPosition.get("id"))
    )
  ) {
    mviewer.getMap().addLayer(layerPosition);
  }
};

/**
 *
 * @param {object} coordinates from position object
 * @returns
 */
const onLocateMe = ({ longitude, latitude }) => {
  // add layer
  findOrAddLayer();

  // remove feature if already displayed
  if (!_.isEmpty(layerPositionSrc.getFeatures())) {
    return layerPositionSrc.clear();
  }

  // reproject coordinated from browser to map SRS
  const coordReproject = ol.proj.transform(
    [longitude, latitude],
    "EPSG:4326",
    mviewer.getMap().getView().getProjection().getCode()
  );

  // create feature
  const iconFeature = new ol.Feature({
    geometry: new ol.geom.Point(coordReproject),
  });
  // apply feature style
  iconFeature.setStyle(iconFeatureStyle);
  // add feature to layer
  layerPositionSrc.addFeature(iconFeature);
  // set center and zoom
  _map.getView().setCenter(coordReproject);
  _map.getView().setZoom(GEOLOC_ZOOM);
};

const initBtnGeoloc = () => {
  // Init current Lang
  let currentLang = API.lang || window.navigator.languages[0];
  currentLang = currentLang.includes("fr") ? "fr" : "en";
  mviewer.lang.changeLanguage(currentLang);
  document.getElementById("btnGeoloc").addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition((position) => onLocateMe(position.coords));
  });
};

new CustomComponent("btnGeoloc", initBtnGeoloc);
