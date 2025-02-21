const layerid = "chantiers";
const cc = (function() {

    /*
    * Private
    */

    var _initialized = false;
    var listTravaux = [];
    var countTravaux = {
        EP: 0,
        ENP: 0,
        INSTALL_RES: 0,
        GENIE_CIVIL: 0,
        Null: 0
    }
    const includesAny = (arr, values) => values.some(v => arr.includes(v));

    var _getTravauxCount = () => {
        listTravaux.forEach(chantier => {
            let natureTravaux = String(chantier.get('nature_chantier'));
            if (natureTravaux === "EP") {
                countTravaux.EP += 1;
            }
            if (natureTravaux === "ENP") {
                countTravaux.ENP += 1;
            }
            if (natureTravaux ===  "INSTALL_RES") {
                countTravaux.INSTALL_RES += 1;
            }
            if (natureTravaux ===  "GENIE_CIVIL") {
                countTravaux.GENIE_CIVIL += 1;
            }
            if (natureTravaux === "null") {
                countTravaux.Null += 1;
            }
        })
    }

    var _activeFilters = (EDPFilters) => {
        let checkedFilters = [];
        filterList = EDPFilters.querySelectorAll(".nature_chantier_container input:checked");
        filterList.forEach(element => {
            checkedFilters.push(element.getAttribute("cat"))
        });
        
        if (checkedFilters.length === 0) {
            listTravaux.forEach(chantier => chantier.setStyle(null));
            return;
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

                    _getTravauxCount();
                    document.getElementById("EP_count").innerHTML+= countTravaux.EP;
                    document.getElementById("ENP_count").innerHTML+= countTravaux.ENP;
                    document.getElementById("INSTALL_RES_count").innerHTML+= countTravaux.INSTALL_RES;
                    document.getElementById("GENIE_CIVIL_count").innerHTML+= countTravaux.GENIE_CIVIL;
                    document.getElementById("Null_count").innerHTML+= countTravaux.Null;

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