const layer_fontaines = new ol.layer.Image({
  source: new ol.source.ImageWMS({
    url: `https://${mviewer.env?.url_data_edp}/geoserver/edp/wms`,
    params: {
      LAYERS: "edp:fontaines,edp:commerce",
      TILED: false,
    },
    serverType: "geoserver",
  }),
});

new CustomLayer("test", layer_fontaines);
