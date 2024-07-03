let chantierPolygonStyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: "rgba(0, 123, 255, 0.5)", // Bleu semi-transparent pour les chantiers
  }),
  stroke: new ol.style.Stroke({
    color: "#007bff", // Bleu pour le contour
    width: 2,
  }),
});

let chantierLegend = {
  items: [
    { styles: chantierPolygonStyle, label: "Chantiers", geometry: "Polygon" }
  ]
};

let chantierLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/chantiers-a-paris/exports/geojson?lang=fr&timezone=Europe%2FBerlin&limit=100&refine=moa_principal%3AEAU%20DE%20PARIS",
    format: new ol.format.GeoJSON(),
  })
});

new CustomLayer("chantiers", chantierLayer, chantierLegend);
