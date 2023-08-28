const layerid = "commerce";
const cc = (function() {

    /*
    * Private
    */

    var _initialized = false;    

    return {
        /*
        * Public
        */

        init: function () {
            // mandatory - code executed when layer is added to legend panel
            if (!_initialized) {
                let divLegend = document.getElementById("legend-commerce").parentNode;
                $("#legendCommerces").insertAfter(divLegend); 
            }
        },

        destroy: function () {
            // mandatory - code executed when layer panel is closed
            _initialized = false;
        }
    };

}());
new CustomControl(layerid, cc.init, cc.destroy);