const layerid = "fontaines";
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
                let divLegend = document.getElementById("legend-fontaines").parentNode;
                $("#legendFontaines_wallace").insertAfter(divLegend); 
            }
        },

        destroy: function () {
            // mandatory - code executed when layer panel is closed
            _initialized = false;
        }
    };

}());
new CustomControl(layerid, cc.init, cc.destroy);