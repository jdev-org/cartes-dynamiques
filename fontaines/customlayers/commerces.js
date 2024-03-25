
const LAYER_URL = `https://${mviewer.env?.url_data_edp}/geoserver/edp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=commerce&outputFormat=application%2Fjson`;
const LAYER_ID = "commerces";

var commerceStyle = new ol.style.Style({
    image: new ol.style.Icon({
        src: `apps/fontaines/img/commerces.svg`,
        scale: 0.45
    })
})

let layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: LAYER_URL,
        format: new ol.format.GeoJSON()
    }),
    style: commerceStyle
});



var densite_carcerale = new CustomLayer(LAYER_ID, layer, legend);

