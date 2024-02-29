const layerid = "edp_ep";
const cc = (function () {
    var urlS = new URL(`https://${mviewer.env?.url_data_edp}/geoserver/edp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=edp%3Aarret_eau_maj&outputFormat=application%2Fjson`);
    $.getJSON(urlS, function(dataS) {
        var itemsS = [];
        var theDivS = document.getElementById("legend");
        $.each(dataS.features, function (key, valS) {
            $.each(valS.properties, function(i,j){
                    if (i == 'datemaj') {
                        let legendBlock = document.getElementById('sidebarBody');
                        div = '<div id="#section_date_maj" style="color: #a7a7a7;margin: 1em 0;font-family:var(--myfont)">Date de dernière mise à jour'  + ' :<br> <b>' + j + '</b><div>';
                        legendBlock.insertAdjacentHTML('afterend', div);
                    } else  {
                        itemsS.push('<li>' + j.replace(/,/gi,"</li><li>") + ' ');
                    }
                })
            });
    });
})();
new CustomControl(layerid, cc);

function displayFormBlock(btn){
    let parentBtn = btn.parentElement;    
    parentBtn.classList.toggle("title-accordion-active");
    let blockBtn = parentBtn.nextElementSibling;
    blockBtn.classList.toggle("block-accordion-active");
};