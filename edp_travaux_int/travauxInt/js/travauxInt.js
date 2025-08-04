var travauxInt = (function () {
  var scripts = [
    "apps/commons/export_table/FileSaver.min.js",
    "apps/commons/export_table/polyfills.umd.js",
    "apps/commons/export_table/jspdf.umd.min.js",
    "apps/commons/export_table/tableExport.min.js",
    "apps/commons/export_table/bootstrap-table-export.min.js",
    "apps/commons/export_table/xlsx.full.min.js"
  ];

  scripts.forEach(function (scriptSrc) {
    var script = document.createElement("script");
    script.src = scriptSrc;
    document.head.appendChild(script);
  });

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
      // Plus d'utilisation du tableau des données pour le moment
      // $("#bottom-panel").toggleClass("active");
      // _loadDataBottomPanel();
      _exportXLS();
    });
  };

  var _exportXLS = () => {
    const XLSX = window.XLSX;
    if (finalData.length === 0) {
      alert("Pas de données à exporter");
      return;
    }
    const worksheet = XLSX.utils.json_to_sheet(finalData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Feuille1");

    const wbout = XLSX.write(workbook, {bookType: "xlsx", type: "array"});
    const blob = new Blob([wbout], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "export.xlsx";
    a.click();

    URL.revokeObjectURL(url);
  };

  let _serveurCarto = `${mviewer.env?.serveur_carto}`;

  let _namespace = `${mviewer.env?.namespace}`;

  let _workspace = `${mviewer.env?.workspace}`;

  let _url = `${mviewer.env?.url}` + "/" + _serveurCarto + "/" + _namespace;

  var _initTravauxData = () => {
    let sourceTravaux = new ol.source.Vector({
      format: new ol.format.GeoJSON(),
      url:
        _url +
        "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" +
        _namespace +
        "%3A" +
        _workspace +
        "&outputFormat=application%2Fjson",
    });

    let styleTravaux = new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: "rgba(0, 0, 0, 0)",
        width: 0,
      }),
    });

    let travauxIntLayer = new ol.layer.Vector({
      source: sourceTravaux,
      style: styleTravaux,
    });

    _map.addLayer(travauxIntLayer);

    sourceTravaux.on("change", () => {
      if (sourceTravaux.getState() === "ready") {
        _formatData(sourceTravaux);
      }
    });
  };

  var _formatData = (sourceTravaux) => {
    let data = sourceTravaux.getFeatures();

    data.forEach((feature) => {
      finalData.push({
        id: feature.getProperties()["geometry"]["ol_uid"],
        chantier_cite_id: feature.get("chantier_cite_id"),
        cp_arrondissement: feature.get("cp_arrondissement"),
        nom_rue: feature.get("nom_rue"),
        date_debut: feature.get("date_debut"),
        date_fin: feature.get("date_fin"),
        demande_cite_id: feature.get("demande_cite_id"),
        lon: feature.get("lon"),
        lat: feature.get("lat"),
        nature_chantier: feature.get("nature_chantier"),
        type_chantier: feature.get("type_chantier"),
        impact_chantier: feature.get("impact_chantier"),
      });
    });
  };

  var _loadDataBottomPanel = () => {
    $(document).ready(function () {
      if ($("#bottom-panel").length) {
        $("#bottom-panel").html(`
          <table id="myTable"
              data-toggle="table"
              data-height="320"
              data-search="true"
              data-show-export="true"
              data-export-types="['json', 'pdf', 'csv', 'excel']"
              >
            <thead>
              <tr>
                <th data-field="id">ID</th>
                <th data-field="date_debut" data-sortable="true">Date début</th>
                <th data-field="date_fin" data-sortable="true">Date fin</th>
                <th data-field="chantier_cite_id">Chantier Cité ID</th>
                <th data-field="cp_arrondissement">CP Arrondissement</th>
                <th data-field="demande_cite_id">Demande Cité ID</th>
                <th data-field="num_emprise">Num Emprise</th>
              </tr>
            </thead>
          </table>
        `);

        $("#myTable").bootstrapTable({
          data: finalData,
          exportOptions: {
            fileName: "export-travaux",
          },
        });
      }
    });
  };

  return {
    init: _initTravauxIntTool,
  };
})();

new CustomComponent("travauxInt", travauxInt.init);
