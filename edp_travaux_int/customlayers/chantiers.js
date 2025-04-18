let EPstyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgba(170, 184, 255, 1)",
  }),
  stroke: new ol.style.Stroke({
    color: "rgba(170, 184, 255, 1)",
    width: 2,
  }),
});

let ENPstyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgba(255, 239, 170, 1)",
  }),
  stroke: new ol.style.Stroke({
    color: "rgba(255, 239, 170, 1)",
    width: 2,
  }),
});

let INSTALL_RESstyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgba(174, 255, 174, 1)",
  }),
  stroke: new ol.style.Stroke({
    color: "rgba(174, 255, 174, 1)",
    width: 2,
  }),
});

let GENIE_CIVILstyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgba(255, 199, 151, 1)",
  }),
  stroke: new ol.style.Stroke({
    color: "rgba(255, 199, 151, 1)",
    width: 2,
  }),
});

let NullStyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgba(226, 226, 226, 1)",
  }),
  stroke: new ol.style.Stroke({
    color: "rgba(226, 226, 226, 1)",
    width: 2,
  }),
});

let AutreStyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgb(237, 171, 243)",
  }),
  stroke: new ol.style.Stroke({
    color: "rgba(237, 171, 243, 1)",
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
chantiersLegend.items.push({ styles: AutreStyle, label: "other", geometry: "Polygon" });

const chantiersLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: "https://gis.jdev.fr/geoserver/edp_demo/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=edp_demo%3Achantiersopendata&outputFormat=application%2Fjson",
    format: new ol.format.GeoJSON(),
  }),
  style: function (feature) {    
    let style;
    
    if (feature.get("nature_code_chantier") === "ep") {
      style = EPstyle;
    } else if (feature.get("nature_code_chantier") === "enp") {
      style = ENPstyle;
    } else if (feature.get("nature_code_chantier") === "install_res") {
      style = INSTALL_RESstyle;
    } else if (feature.get("nature_code_chantier") === "genie_civil") {
      style = GENIE_CIVILstyle;
    } else if (feature.get("nature_code_chantier") === null) {
      style = NullStyle;
    } else if (feature.get("nature_code_chantier") === "autre") {
    style = AutreStyle;
  }
    return style;
  },
});
new CustomLayer("chantiers", chantiersLayer, chantiersLegend);
