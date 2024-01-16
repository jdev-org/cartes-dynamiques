
const LAYER_URL = `https://${mviewer.env?.url_data_edp}/geoserver/edp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=fontaines&outputFormat=application%2Fjson`;
const LAYER_ID = "fontaines";

const dispoIconesPath = {
    OUI: {src: `apps/fontaines/img/fontaine_disponible.svg`},
    NON: {src: `apps/fontaines/img/fontaine_indisponible.svg`}
};


// create styles
const uniqueStyle = (feature) => {
    const props = feature.getProperties();
    const dispo = props["dispo"];
    const access = props["accessible"];
    const type = props["type_objet"];
    const dispoIcon = dispoIconesPath[dispo];    
    let iconFontaine;
    if(access == 'Non'){
        iconFontaine = `apps/fontaines/img/fontaine_nonaccessible.svg`;
    } else{
        iconFontaine= dispoIcon?.src;
    }
    return [
        new ol.style.Style({            
            image: new ol.style.Icon({
                scale: 0.45,
                src: iconFontaine || `apps/fontaines/img/fontaine_nonaccessible.svg`,
            })
        }),
        new ol.style.Style({     
            image: new ol.style.Icon({
                scale: 0.45,
                src: `apps/fontaines/img/${type}.svg`,
            })
        })
]};


let layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: LAYER_URL,
        format: new ol.format.GeoJSON()
    }),
    style: uniqueStyle
});



var fontaines = new CustomLayer(LAYER_ID, layer, legend);

