const layerid = "fontaines";
const cc = (function () {
  /*
   * Private
   */

  var _initialized = false;

  async function getDateDataUpdate() {
    var urlS = new URL(
      `https://${mviewer.env?.url_data_edp}/geoserver/edp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=edp%3Afontaines_maj&outputFormat=application%2Fjson`
    );
    $.getJSON(urlS, function (dataS) {
      var itemsS = [];
      $.each(dataS.features, function (key, valS) {
        $.each(valS.properties, function (i, j) {
          if (i == "datemaj") {
            $("#section_date_maj").html(
              "<span i18n='sidebar.update.data'>Date de dernière mise à jour</span>" +
                " :<br> <b>" +
                j +
                "</b> "
            );
          } else {
            itemsS.push("<li>" + j.replace(/,/gi, "</li><li>") + " ");
          }
        });
      });
    });
  }
  function getCurrentLang() {
    // Init current Lang
    let currentLang = API.lang || window.navigator.languages[0];
    currentLang = currentLang.includes("fr") ? "fr" : "en";
    mviewer.lang.changeLanguage(currentLang);
  }

  return {
    /*
     * Public
     */

    init: function () {
      // mandatory - code executed when layer is added to legend panel
      if (!_initialized) {
        let divLegend = document.getElementById("legend-fontaines").parentNode;
        $("#legendFontaines").insertAfter(divLegend);
        getDateDataUpdate().then(getCurrentLang());
      }
    },

    destroy: function () {
      // mandatory - code executed when layer panel is closed
      _initialized = false;
    },
  };
})();
new CustomControl(layerid, cc.init, cc.destroy);
