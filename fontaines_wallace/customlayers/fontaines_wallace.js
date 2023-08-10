
const LAYER_URL = 'https://edp.jdev.fr/geoserver/edp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=fontaines&outputFormat=application%2Fjson&CQL_FILTER=type_objet=%27FONTNE_WALLACE%27';
const LAYER_ID = "fontaines_wallace";

const dispoIconesPath = {
    OUI: {src: `apps/fontaines_wallace/img/fontaineWal_disponible.svg`},
    NON: {src: `apps/fontaines_wallace/img/fontaineWal_indisponible.svg`}
};


// create styles
const uniqueStyle = (feature) => {
    const props = feature.getProperties();
    const dispo = props["dispo"];
    const jeu = props["url_jeu_vp"];
    const dispoIcon = dispoIconesPath[dispo];    
    let iconFontaine;
    if(jeu){        
        iconFontaine= dispoIcon?.src;
    } else{
        iconFontaine = `apps/fontaines_wallace/img/fontaineWal_nogame.svg`;
    }
    return [
        new ol.style.Style({            
            image: new ol.style.Icon({
                scale: 0.45,
                src: iconFontaine || `apps/fontaines_wallace/img/fontaineWal_nogame.svg`,
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



var fontaines_wallace = new CustomLayer(LAYER_ID, layer, legend);
