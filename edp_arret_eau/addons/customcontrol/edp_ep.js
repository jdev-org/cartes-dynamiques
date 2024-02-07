var customLayersFunctionsParamEp = function () {

    // Remove spaces and first "or" in cql filters for criteres exclusion layers
    function _formatParamFilter(_filter) {
        const _matchFirstOr = new RegExp("(^ {0,}OR )|(^undefinedOR )");
        _filter = _filter.replace(_matchFirstOr, "");
        var _paramFilter = {
            "viewparams": _filter
        };
        return _paramFilter;
    };

    return {

        formatParamFilterEp: function (filter) {
            return _formatParamFilter(filter);
        }
    };

}();


mviewer.customControls.edp_ep = (function() {


//Obtenir la resolution de la carte lors d'un déplacement / zoom...
var _mapResChanged = function (e) {
    var _map = mviewer.getMap();
    var _mapView = _map.getView();
    var _mapRes = _mapView.getResolution();

};


var _updateLayerParams = function (e) {
            // Initialisation de la requête viewparams et des paramètres RES / STT / SLD / MTF / ARR
            let newParamFilter = "";
            var newParamFilterResol  = "resol:5;";
            var newParamFilterRes    = "res:EP;";
            var newParamFilterStt    = "stt:tous;";
            var newParamFilterSldr   = "sldr:tous;";
            var newParamFilterMtf    = "mtf:tous;";
            var newParamFilterArr    = "arr:tous";




            // Récupération de la résolution lors d'une MAJ de la requête, du filtrage
            var _mapResDefaut = 999;
            //var _mapRes = Math.round(mviewer.getMap().getView().getResolution()) ;
            var _mapRes = Math.round(mviewer.getMap().getView().getResolution()) ;
            if  (_mapRes !== _mapResDefaut){
                newParamFilterResol = `resol:${_mapRes};`;
            }





            // Sélectionner les éléments HTML identifiés par la classe ".res-radio"
            var formElements1 = document.querySelectorAll(".res-radio");

            // Boucler sur les éléments HTML ".res-radio" et MAJ de la valeur
            formElements1.forEach(el => {
                var value1 = el.value;
                var checked1 = el.checked;
                if (checked1) {
                    newParamFilterRes = `res:${value1};`;
                }
            });

            // Sélectionner les deux checkbox disponibles et création des variables de "check" et de "value" pour chaque
            var formElements2a = document.querySelector(".stt-checkbox1");
            var formElements2b = document.querySelector(".stt-checkbox2");

            var checked2a = false;
            var value2a = "EN COURS";
            if (formElements2a != null) {
              checked2a = formElements2a.checked;
              value2a = formElements2a.value;
            }

            var checked2b = false;
            var value2b = "PREVU";
            if (formElements2b != null) {
              checked2b = formElements2b.checked;
              value2b = formElements2b.value;
            }

            if (checked2a == false && checked2b == false) {
              return ;
            }

            // Conditions pour MAJ la valeur du newParamFilterStt
            if (checked2a && checked2b){
		        newParamFilterStt = `stt:tous;`;
	        }

            else if (checked2a && checked2b == false){
		        newParamFilterStt = `stt:${value2a};`;
	        }

            else if (checked2a == false && checked2b){
		        newParamFilterStt = `stt:${value2b};`;
	        }

	        else {
		        newParamFilterStt = `stt:999;`;
	        }




             //Sélectionner les éléments HTML identifiés par la classe ".slider"
            var formElements3 = document.querySelectorAll(".slider");

            // Boucler sur les éléments HTML ".slider" et MAJ de la valeur
            formElements3.forEach(el => {
                var value3 = el.value;
                if (value3) {
                    newParamFilterSldr =  `sldr:${value3};`;
                }
            });




            //Sélectionner les éléments HTML identifiés par la classe ".combobox_mtf"
            var formElements4 = document.querySelectorAll(".combobox_mtf");

            // Boucler sur les éléments HTML ".combobox_mtf" et MAJ de la valeur
            formElements4.forEach(el => {
                var value4 = el.value;
                if (value4) {
                    newParamFilterMtf = `mtf:${value4};`;
                }
            });




            //Sélectionner les éléments HTML identifiés par la classe ".combobox_arr"
            var formElements5 = document.querySelectorAll(".combobox_arr");

            // Boucler sur les éléments HTML ".combobox_arr" et MAJ de la valeur
            formElements5.forEach(el => {
                var value5 = el.value;
                if (value5) {
                    newParamFilterArr = `arr:${value5}`;

                }
            });




            // Construction de la requête URL
                newParamFilter += newParamFilterResol;
                newParamFilter += newParamFilterRes;
                newParamFilter += newParamFilterStt;
                newParamFilter += newParamFilterSldr;
                newParamFilter += newParamFilterMtf;
                newParamFilter += newParamFilterArr;

            // Application de la variable formatParamFilter sur la variable "newParamFilter" pour supprimer les espaces
            newParamFilterParam = customLayersFunctionsParamEp.formatParamFilterEp(newParamFilter);
            // MAJ de la customLayers
            mviewer.customLayers.edp_ep.layer.getSource().updateParams(newParamFilterParam);
            // Refresh de la couche à afficher
            mviewer.customLayers.edp_ep.layer.getSource().refresh();

            if ($('#right-panel').is('.active')) {
                $('#right-panel').toggleClass('active');
            }

};

//Fonction de filtrage et de création de la requête
    return {

        init: function() {
            mviewer.getMap().on('moveend', _updateLayerParams);
            if (!mviewer.customComponents.edp_ep.init) {
                document.addEventListener("edp_ep-init", () => {
                    mviewer.customComponents.edp_ep.init();
                })    
            } else {
                mviewer.customComponents.edp_ep.init();
            };
            
        },


        //Fonction de mise à jour de la requête
        updateLayer: function() {
            _updateLayerParams();
        },

        destroy: function() {

        }

    };

}());

var urlS = new URL(`https://${mviewer.env?.url_data_edp}/geoserver/edp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=edp%3Aarret_eau_maj&outputFormat=application%2Fjson`);
$.getJSON(urlS, function(dataS) {
    var itemsS = [];
    var theDivS = document.getElementById("section_date_maj");
    $.each(dataS.features, function (key, valS) {
        $.each(valS.properties, function(i,j){
                if (i == 'datemaj') {
					$('#section_date_maj').html('Date de dernière mise à jour'  + ' :<br> <b>' + j + '</b> ');
                } else  {
                    itemsS.push('<li>' + j.replace(/,/gi,"</li><li>") + ' ');
                }
            })
        });
});
