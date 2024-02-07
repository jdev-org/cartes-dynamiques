export const getOptions = () => {
    const mviewerId = configuration.getConfiguration().application.id;
    const options = mviewer.customComponents.offCanvas.config.options;
    return options.mviewer[mviewerId];
};

export const toggleSidebar = () => {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
    var btn__sidebar = document.getElementById("sideBarNavBtn");
    btn__sidebar.classList.toggle("active");
};

export const initDisplaySidebar = () => {
    const mainSize = document.getElementById("main").className;    
    if(mainSize == "" || mainSize == "xl"){
        toggleSidebar();
    }
};
