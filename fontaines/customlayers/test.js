const layer_fontaines = new ol.layer.Image({
  source: new ol.source.ImageWMS({
    url: "https://edp.jdev.fr/geoserver/edp/wms",
    params: {
      LAYERS: "edp:fontaines,edp:commerce",
      TILED: false,
    },
    serverType: "geoserver",
  }),
});

new CustomLayer("test", layer_fontaines);
