const layerid = "fontaines";
const cc = (function () {
  /*
   * Private
   */

  var _initialized = false;

  function getDateDataUpdate() {
    var urlS = new URL(
      "https://edp.jdev.fr/geoserver/edp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=edp%3Afontaines_maj&outputFormat=application%2Fjson"
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

  return {
    /*
     * Public
     */

    init: function () {
      // mandatory - code executed when layer is added to legend panel
      if (!_initialized) {
        let divLegend = document.getElementById("legend-fontaines").parentNode;
        $("#legendFontaines_wallace").insertAfter(divLegend);
        getDateDataUpdate();
      }
    },

    destroy: function () {
      // mandatory - code executed when layer panel is closed
      _initialized = false;
    },
  };
})();
new CustomControl(layerid, cc.init, cc.destroy);
