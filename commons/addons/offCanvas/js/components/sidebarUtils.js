export const getOptions = () => {
    const mviewerId = configuration.getConfiguration().application.id;
    const options = mviewer.customComponents.offCanvas.config.options;
    return options.mviewer[mviewerId];
};

export const display = () => {
    const display = sidebar.style.display;
    sidebar.style.display = display === "block" ? "none": "block";
};

export const outside = (e) => {
    if (e.target == sidebar) {
        sidebar.style.display = "none";
    }
};