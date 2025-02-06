let EPstyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgba(170, 184, 255, 0.5)",
  }),
  stroke: new ol.style.Stroke({
    color: "rgba(170, 184, 255, 1)",
    width: 2,
  }),
});

let ENPstyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgba(255, 239, 170, 0.5)",
  }),
  stroke: new ol.style.Stroke({
    color: "rgba(255, 239, 170, 1)",
    width: 2,
  }),
});

let INSTALL_RESstyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgba(174, 255, 174, 0.5)",
  }),
  stroke: new ol.style.Stroke({
    color: "rgba(174, 255, 174, 1)",
    width: 2,
  }),
});

let GENIE_CIVILstyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgba(255, 199, 151, 0.5)",
  }),
  stroke: new ol.style.Stroke({
    color: "rgba(255, 199, 151, 1)",
    width: 2,
  }),
});

let NullStyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgba(226, 226, 226, 0.5)",
  }),
  stroke: new ol.style.Stroke({
    color: "rgba(226, 226, 226, 1)",
    width: 2,
  }),
});

let chantiersLegend = { title: "Types de chantiers",items: [] };

chantiersLegend.items.push({ styles: EPstyle, label: "EP", geometry: "Polygon" });
chantiersLegend.items.push({ styles: ENPstyle, label: "ENP", geometry: "Polygon" });
chantiersLegend.items.push({ styles: INSTALL_RESstyle, label: "INSTALL_RES", geometry: "Polygon" });
chantiersLegend.items.push({ styles: GENIE_CIVILstyle, label: "GENIE_CIVIL", geometry: "Polygon" });
chantiersLegend.items.push({ styles: NullStyle, label: "Null", geometry: "Polygon" });

const chantiersLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
      url: 'apps/edp_travaux/data/chantiers.geojson',
      format: new ol.format.GeoJSON(),
  }),
  style: function (feature) {
    let style;
    if (feature.get("nature_chantier") === "EP") {
      style = EPstyle;
    } else if (feature.get("nature_chantier") === "ENP") {
      style = ENPstyle;
    } else if (feature.get("nature_chantier") === "INSTALL_RES") {
      style = INSTALL_RESstyle;
    } else if (feature.get("nature_chantier") === "GENIE_CIVIL") {
      style = GENIE_CIVILstyle;
    } else if (feature.get("nature_chantier") === "null") {
      style = NullStyle;
    }
    return style;
  }
});
new CustomLayer('chantiers', chantiersLayer, chantiersLegend);
