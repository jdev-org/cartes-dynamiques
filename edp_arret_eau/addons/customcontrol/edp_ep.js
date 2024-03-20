const layerid = "edp_ep";
const cc = (function () {    
    // Add date update
    var urlS = new URL(`https://${mviewer.env?.url_data_edp}/geoserver/edp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=edp%3Aarret_eau_maj&outputFormat=application%2Fjson`);
    $.getJSON(urlS, function (dataS) {
        var itemsS = [];
        $.each(dataS.features, function (key, valS) {
            $.each(valS.properties, function (i, j) {
            if (i == "datemaj") {
                //let blockUpdateData = document.getElementById("section_date_maj");
                mviewer.waitForElm('#section_date_maj').then((elm) => {                   
                    let html =`<span i18n='sidebar.update.data'>Date de dernière mise à jour</span>:<br><b>${j}</b>`;
                    elm.insertAdjacentHTML("afterbegin", html);
                });                
            } else {
                itemsS.push("<li>" + j.replace(/,/gi, "</li><li>") + " ");
            }
            });
        });
    });
    // Create pie and get statistiques
    // Code in customlayers edp_ep.js at line 219    
     
})();
new CustomControl(layerid, cc);

function displayFormBlock(btn){
    let parentBtn = btn.parentElement;    
    parentBtn.classList.toggle("title-accordion-active");
    let blockBtn = parentBtn.nextElementSibling;
    blockBtn.classList.toggle("block-accordion-active");
};
  