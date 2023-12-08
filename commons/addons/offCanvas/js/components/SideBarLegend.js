const removeHeader = () => {
    document.querySelector("#sidebarBody #layers-container-box-header").remove();
}

const removeDragElements = () => {
    document.querySelectorAll("#sidebarBody .mv-grip").forEach((el) => el.remove());
}

const reCreateSidebarSliders = () => {
    document.querySelectorAll("#sidebarBody .form-group-opacity input").forEach((el, i) => {
        const originalSlider = el.parentElement.querySelector(".slider");
        $(el).slider();
        originalSlider.remove();
    })
}

export const insertLegend = () => {
    const legendCopy = document.querySelector("#legend").cloneNode(true);
    if (document.querySelector("#sidebarBody")) {
        sidebarBody.append(legendCopy);
        // remove useless
        removeHeader();
        removeDragElements();
        // need to create sliders again to works inside slidebar
        reCreateSidebarSliders();
    }
}
