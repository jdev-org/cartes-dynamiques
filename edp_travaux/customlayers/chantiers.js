let EPstyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgb(0, 44, 219)",
  }),
  stroke: new ol.style.Stroke({
    color: "rgb(0, 44, 219)",
    width: 2,
  }),
});

let ENPstyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgb(54,165,133)",
  }),
  stroke: new ol.style.Stroke({
    color: "rgb(54,165,133)",
    width: 2,
  }),
});

let INSTALL_RESstyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgb(245, 168, 108)",
  }),
  stroke: new ol.style.Stroke({
    color: "rgb(245, 168, 108)",
    width: 2,
  }),
});

let GENIE_CIVILstyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgb(255, 100, 125)",
  }),
  stroke: new ol.style.Stroke({
    color: "rgb(255, 100, 125)",
    width: 2,
  }),
});

let NullStyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgb(247, 236, 109)",
  }),
  stroke: new ol.style.Stroke({
    color: "rgb(247, 236, 109)",
    width: 2,
  }),
});

let AutreStyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgb(170, 185, 255)",
  }),
  stroke: new ol.style.Stroke({
    color: "rgb(170, 185, 255)",
    width: 2,
  }),
});

let chantiersLegend = { title: "Types de chantiers", items: [] };

chantiersLegend.items.push({ styles: EPstyle, label: "EP", geometry: "Polygon" });
chantiersLegend.items.push({ styles: ENPstyle, label: "ENP", geometry: "Polygon" });
chantiersLegend.items.push({
  styles: INSTALL_RESstyle,
  label: "INSTALL_RES",
  geometry: "Polygon",
});
chantiersLegend.items.push({
  styles: GENIE_CIVILstyle,
  label: "GENIE_CIVIL",
  geometry: "Polygon",
});
chantiersLegend.items.push({ styles: NullStyle, label: "null", geometry: "Polygon" });
chantiersLegend.items.push({
  styles: AutreStyle,
  label: "nature_autre",
  geometry: "Polygon",
});

let _sourceEdp;

let _vectorEdp;

let _serveurCarto = `${mviewer.env?.serveur_carto}`;

let _namespace = `${mviewer.env?.namespace}`;

let _workspace = `${mviewer.env?.workspace}`;

let _projection = `${mviewer.env?.projection}`;

let _url = `${mviewer.env?.url}` + _serveurCarto + "/" + _namespace;

_sourceEdp = new ol.source.Vector({
  format: new ol.format.GeoJSON({
    srsName: _projection,
  }),
  url:
    _url +
    "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" +
    _namespace +
    "%3A" +
    _workspace +
    "&outputFormat=application%2Fjson",
});

_sourceEdp.id = "edpSource";

_vectorEdp = new ol.layer.Vector({
  source: _sourceEdp,
  style: function (feature) {
    const styles = {
      ep: EPstyle,
      enp: ENPstyle,
      install_res: INSTALL_RESstyle,
      genie_civil: GENIE_CIVILstyle,
      nature_autre: AutreStyle,
    };
    return styles[feature.get("nature_code_chantier")] || NullStyle;
  },
});

// Format date
const formatDate = (isoDate) => {
  if (!isoDate) return "";
  const d = new Date(isoDate);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

_sourceEdp.on('addfeature', function (evt) {
  const feature = evt.feature;
  const dateDebut = feature.get('date_debut');
  const dateFin = feature.get('date_fin');

  feature.set('date_debut', formatDate(dateDebut));
  feature.set('date_fin', formatDate(dateFin));
});

new CustomLayer("chantiers", _vectorEdp, chantiersLegend);
