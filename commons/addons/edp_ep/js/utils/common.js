export const getOptions = () => {
    const mviewerId = configuration.getConfiguration().application.id;
    const options = mviewer.customComponents.offCanvas.config.options;
    return options.mviewer[mviewerId];
};