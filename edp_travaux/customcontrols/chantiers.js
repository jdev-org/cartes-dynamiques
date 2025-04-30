const layerid = "chantiers";
const cc = (function () {
  /*
   * Private
   */

  var _initialized = false;
  var listTravaux = [];

  const includesAny = (arr, values) => values.some((v) => arr.includes(v));

  var _activeFilters = (EDPFilters) => {
    let checkedFilters = [];
    filterList = EDPFilters.querySelectorAll(".nature_chantier_container input:checked");
    filterList.forEach((element) => {
      checkedFilters.push(element.getAttribute("cat"));
    });

    if (checkedFilters.length === 0) {
      let allFilters = EDPFilters.querySelectorAll(".nature_chantier_container input");
      checkedFilters = [...allFilters].map((element) => element.getAttribute("cat"));

      // Coche tous les filtres visuellement
      allFilters.forEach((element) => (element.checked = true));
    }

    listTravaux.forEach((chantier) => {
      let natureTravaux = String(chantier.get("nature_code_chantier"));
      if (checkedFilters.includes(natureTravaux)) {
        let travaux = [];
        if (natureTravaux === "ep") {
          travaux.push("ep");
        }
        if (natureTravaux === "enp") {
          travaux.push("enp");
        }
        if (natureTravaux === "install_res") {
          travaux.push("install_res");
        }
        if (natureTravaux === "genie_civil") {
          travaux.push("genie_civil");
        }
        if (natureTravaux === "nature_autre") {
          travaux.push("nature_autre");
        }
        if (natureTravaux === "null") {
          travaux.push("null");
        }
        if (natureTravaux === "") {
          travaux.push("");
        }
        if (includesAny(checkedFilters, travaux)) {
          chantier.setStyle(null);
        } else {
          chantier.setStyle(new ol.style.Style(null));
        }
      } else {
        chantier.setStyle(new ol.style.Style(null));
      }
    });
  };

  // Date de mise à jour
  async function getDateDataUpdate() {
    var url = new URL(
      `${mviewer.env?.url}/geoserver/${mviewer.env?.namespace}/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=${mviewer.env?.dataUpdateLayer}%3Adonnees_maj&maxFeatures=50&outputFormat=application%2Fjson`
    );
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.features.forEach((val) => {
          for (const [key, value] of Object.entries(val.properties)) {
            if (key === "datemaj") {
              document.getElementById("section_date_maj").innerHTML =
                "<span>Date de dernière mise à jour</span> :<br>" + value;
            }
          }
        });
      });
  }

  return {
    /*
     * Public
     */

    init: function () {
      // mandatory - code executed when layer is added to legend panel
      mviewer.getMap().once("rendercomplete", function (e) {
        if (!_initialized) {
          // List all feature from the layer
          listTravaux = mviewer.getLayer(layerid).layer.getSource().getFeatures();
          let EDPFilters = document.getElementById("EDPFilters");
          EDPFilters.addEventListener("change", () => _activeFilters(EDPFilters));
          getDateDataUpdate();

          _initialized = true;
        }
      });
    },

    destroy: function () {
      // mandatory - code executed when layer panel is closed
      _initialized = false;
    },
  };
})();
new CustomControl(layerid, cc.init, cc.destroy);
