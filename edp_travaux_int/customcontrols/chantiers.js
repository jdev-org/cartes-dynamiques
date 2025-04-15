const layerid = "chantiers";
const cc = (function() {

    /*
    * Private
    */

    var _initialized = false;
    var listTravaux = [];

    const includesAny = (arr, values) => values.some(v => arr.includes(v));

    var _activeFilters = (EDPFilters) => {
        let checkedFilters = [];
        filterList = EDPFilters.querySelectorAll(".nature_chantier_container input:checked");
        filterList.forEach(element => {
            checkedFilters.push(element.getAttribute("cat"))
        });
        
        if (checkedFilters.length === 0) {
            let allFilters = EDPFilters.querySelectorAll(".nature_chantier_container input");
            checkedFilters = [...allFilters].map(element => element.getAttribute("cat"));
    
            // Coche tous les filtres visuellement
            allFilters.forEach(element => element.checked = true);
        }

        listTravaux.forEach(chantier => {
            let natureTravaux = String(chantier.get('nature_chantier'));
            if (checkedFilters.includes(natureTravaux)) {
                let travaux = [];
                if (natureTravaux === "EP") {                    
                    travaux.push("EP");
                }
                if (natureTravaux === "ENP") {
                    travaux.push("ENP");
                }
                if (natureTravaux === "INSTALL_RES") {
                    travaux.push("INSTALL_RES");
                }
                if (natureTravaux === "GENIE_CIVIL") {
                    travaux.push("GENIE_CIVIL");
                }
                if (natureTravaux === "null") {
                    travaux.push("null");
                } 
                if (natureTravaux === "autre") {
                    travaux.push("autre");
                } 
                if (includesAny(checkedFilters, travaux)) {
                    chantier.setStyle(null);
                } else {
                    chantier.setStyle(new ol.style.Style(null));
                }
            } else {
                chantier.setStyle(new ol.style.Style(null));
            }
        })
    }

    return {
        /*
        * Public
        */

        init: function () {
            // mandatory - code executed when layer is added to legend panel
            mviewer.getMap().once("rendercomplete", function(e) {
                if (!_initialized) {
                    // List all feature from the layer
                    listTravaux = mviewer.getLayer(layerid).layer.getSource().getFeatures();
                    let EDPFilters = document.getElementById("EDPFilters");
                    EDPFilters.addEventListener("change", () => _activeFilters(EDPFilters));

                    _initialized = true;
                }
            })
        },

        destroy: function () {
            // mandatory - code executed when layer panel is closed
            _initialized = false;
        }
    };

}());
new CustomControl(layerid, cc.init, cc.destroy);