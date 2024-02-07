export const getArrondissements = async () => {
    const src = mviewer.getLayer("edparrondissement").layer.getSource();
    const url = src.getUrl();
    const layer = src.getParams().LAYERS;
    const wfsUrl = url.replace("wms", "wfs");
    const params = `?service=WFS&version=1.0.0&request=GetFeature&typeName=${ layer }&outputFormat=application/json`;
    const request = await fetch(wfsUrl + params);
    const data = await request.json();
    let arrondissements = data.features.map(f => {
        let numberArr = f.properties.cp.slice(-2);
        if (numberArr) {
            numberArr = parseInt(f.properties.cp.slice(-2));
            const label = `${ numberArr }`
            return { ...f.properties, value: numberArr, label: label };
        }
        return null;
    }).filter(x => x);
    return arrondissements;
}

export const getTravauxValues = (field) => {
    let values = [];
    const clusters = mviewer.getLayers().edp_ep.layer.getSource().getFeatures();
    clusters.forEach(c => values = [...values, ...c.getValuesByField(field)]);
    return _.uniq(values);

}