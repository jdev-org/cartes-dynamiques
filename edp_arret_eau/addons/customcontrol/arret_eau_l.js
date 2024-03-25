const layerid = "arret_eau_l";
const cc = (function () {
  /*
   * Private
   */

  var _initialized = false;  

    // Function to filter map by CQL filter
    function filterDataByAttr(valAtt) {
        var layer = mviewer.getLayer("arret_eau_l");
        var src = layer.layer.getSource();
        var params = src.getParams();
        // update wms layer params
        params.CQL_FILTER = `${valAtt}`;
        src.updateParams(params);
        src.refresh();
    }
  
  return {
    /*
     * Public
     */

    init: function () {        
        // mandatory - code executed when layer is added to legend panel
        if (!_initialized) {
            mviewer.getMap().on('moveend', function(e){ 
                let currentZoom = mviewer.getMap().getView().getZoom();                
                if(currentZoom > 16){
                    let source = mviewer.getLayer("edp_ep").layer.getSource();
                    source.on('change', function(e){
                        var source = e.target; 
                        var numfeatures = source.getFeatures().length;
                        if (source.getState() === 'ready' && numfeatures > 0) {               
                            let idFeaturesList = [];
                            let features = source.getFeatures();
                            features.forEach(feature => {
                                const props = feature.getProperties();
                                const gid = props.features[0].getProperties()["gid"];
                                idFeaturesList.push(gid);
                            });            
                            let CQLFilterGID = `gid IN (${idFeaturesList})`;
                            filterDataByAttr(CQLFilterGID);
                        }
                    })                    
                }
            });
            _initialized = true;
        }
    },

    destroy: function () {
      // mandatory - code executed when layer panel is closed
      _initialized = false;
    },
  };
})();
new CustomControl(layerid, cc.init, cc.destroy);
