const layer = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url: 'https://edp.jdev.fr/geoserver/edp/wms',
        params: {LAYERS: 'edp:arret_eau', TILED: false},
        serverType: 'geoserver'
    }),
});
new CustomLayer('edp_ep', layer);

