var travauxInt = (function () {
  let _config;

  let _map;

  let finalData = [];

  var _initTravauxIntTool = () => {
    // Get all configurations
    _config = mviewer.customComponents.travauxInt.config;
    _map = mviewer.getMap();
    console.log("Init TravauxInt Tool");

    _initTravauxSaisieButton();
    _initTravauxData();
  };

  var _initTravauxSaisieButton = () => {
    // Get the button
    let buttonTravaux = document.getElementById("travauxIntButton");

    buttonTravaux.addEventListener("click", () => {
      console.log("TravauxInt button clicked");
      $("#bottom-panel").toggleClass("active");
      _loadDataBottomPanel();
    });
  };

  var _initTravauxData = () => {
    let sourceTravaux = new ol.source.Vector({
      url: "apps/edp_travaux_int/travauxInt/data/result.geojson",
      format: new ol.format.GeoJSON()
    });

    let travauxIntLayer = new ol.layer.Vector({
      source: sourceTravaux
    });

    _map.addLayer(travauxIntLayer);

    sourceTravaux.on("change", () => {
      if (sourceTravaux.getState() === "ready") {
          _formatData(sourceTravaux);
      };
    });
  };

  var _formatData = (sourceTravaux) => {

    let data = sourceTravaux.getFeatures();

    data.forEach((feature) => {
      finalData.push({
        "id": feature.getProperties()["geometry"]["ol_uid"],
        "chantier_cite_id": feature.get("chantier_cite_id"),
        "cp_arrondissement": feature.get("cp_arrondissement"),
        "date_debut": feature.get("date_debut"),
        "date_fin": feature.get("date_fin"),
        "demande_cite_id": feature.get("demande_cite_id"),
        "num_emprise": feature.get("num_emprise"),
      });
    });

    console.log(finalData);
  };

  var _loadDataBottomPanel = () => {

    $(document).ready(function() {
      if ($("#bottom-panel").length) {
        $("#bottom-panel").html(`
          <table id="myTable"
              data-toggle="table"
              data-height="350"
              data-search="true">
            <thead>
              <tr>
                <th data-field="id">
                  ID
                </th>
                <th data-field="date_debut">
                  Date début
                </th>
                <th data-field="date_fin">
                  Date fin
                </th>
                <th data-field="chantier_cite_id">
                  Chantier Cité ID
                </th>
                <th data-field="cp_arrondissement">
                  CP Arrondissement
                </th>
                <th data-field="demande_cite_id">
                  Demande Cité ID
                </th>
                <th data-field="num_emprise">
                  Num Emprise
                </th>
              </tr>
            </thead>
          </table>
        `);

        $("#myTable").bootstrapTable({
          data: finalData
        });
      }
    });  
  };

  return {
    init: _initTravauxIntTool,
  };
})();

new CustomComponent("travauxInt", travauxInt.init);