
const LAYER_URL = 'https://wxs.ign.fr/adresse/geoportail/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=BAN.DATA.GOUV:ban&outputFormat=application%2Fjson';
const LAYER_ID = "ban";

var commerceStyle = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 5,
        fill: new ol.style.Fill({color: 'red'})
    })
})

let layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: LAYER_URL,
        format: new ol.format.GeoJSON()
    }),
    style: commerceStyle
});



var ban = new CustomLayer(LAYER_ID, layer, legend);

