const url = `https://${mviewer.env?.url_data_edp}/geoserver/edp/wms`;
const layer = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url: url,
        params: {LAYERS: 'edp:arret_eau', TILED: false},
        serverType: 'geoserver'
    }),
});
new CustomLayer('edp_ep', layer);

