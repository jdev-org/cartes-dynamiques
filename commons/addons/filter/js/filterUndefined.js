const filterUndefined = (function () {
    console.log("filterUndefined.js is successfully loaded");

    var _sourceEdp;
    var _isActive = false;

    var _init = (id) => {
        const switchInput = document.querySelector('#switchLayerFilter input[type="checkbox"]');
        let switchInputStatus = switchInput.checked;

        if (id === "advancedFilter-clearAll") {
            if (switchInputStatus) {
                _isActive = !_isActive;
                _hideFeaturesAlreadySet();
                _disableNatureFilter();
                switchInput.checked = false;
            } else {
                filter.clearAllFilter();
            }
        } else {
            _isActive = !_isActive;
            _hideFeaturesAlreadySet();
            _disableNatureFilter();
        };

        console.log(_isActive);
    };

    // Fonction qui permet de cacher les features ayant un style déjà défini
    var _hideFeaturesAlreadySet = () => {
        let allLayers = mviewer.getMap().getAllLayers();
        let _features;
        let _filterOptions = document.getElementById("advancedFilter-chantiers");

        if (!_sourceEdp) {
            for (const layer of allLayers) {
                if (layer.getProperties().source.id === "edpSource") {
                    _sourceEdp = layer.getSource();
                    break;
                }
            }
        }

        if (_sourceEdp) {
            _features = _sourceEdp.getFeatures();
        } else {
            console.error("No source found with id 'edpSource'");
            return;
        }

        const featuresToZoom = [];
        
        _features.forEach((feature) => {
            _natureChantier = feature.get("nature_chantier");

            if (_natureChantier) {
                if (_isActive) {
                    feature.setStyle(new ol.style.Style(null));
                    _filterOptions.style.display = "none";
                } else {
                    feature.setStyle(null);
                    _filterOptions.style.display = "block";
                }
            } else {
                featuresToZoom.push(feature);
            }
        });

        if (_isActive && featuresToZoom.length > 0) {
            _zoomOnFeatures(featuresToZoom);
        }
    };

    // Fonction qui permet de désactiver les options du filtre des natures
    var _disableNatureFilter = () => {
        let _optionsNatureFilter = document.querySelectorAll(".nature_chantier_container input[type='checkbox']");

        _optionsNatureFilter.forEach((option) => {
            option.disabled = true;
            if (option.id !== "Null_checkbox") {
                option.checked = !_isActive;
                option.disabled = _isActive;
            }
        });

        let nullCheckBox = document.getElementById("Null_checkbox");
        if (nullCheckBox) {
            nullCheckBox.disabled = _isActive;
        }
    };

    // Fonction qui effectue un zoom sur un ensemble de "features"
    var _zoomOnFeatures = (features, bufferRatio = 0.2) => {

        // Si la liste de features est vide ou non définie, on stop le programme
        if (!features || features.length === 0) return;

        // On commence par créer une étendue vide (boîte englobante vide)
        var extent = ol.extent.createEmpty();

        // On parcourt chaque features
        features.forEach((feature) => {
            // On récupère la geométrie
            var geometry = feature.getGeometry();

            // Si la géométrie existe, on l'ajoute à l'étendue globale
            if (geometry) {
                ol.extent.extend(extent, geometry.getExtent());
            }
        });

        // Si l'étendue n'est pas vide
        if (!ol.extent.isEmpty(extent)) {
            // On ajoute une marge autour de l'étendue, égale au cinquième de sa largeur (0.2)
            var bufferExtent = ol.extent.buffer(extent, ol.extent.getWidth(extent) * bufferRatio);

            // On met à jour la vue de la carte avec ette nouvelle étendue
            mviewer.getMap().getView().fit(bufferExtent);
        }
    };

    return {
        active: _init,
    };
})();