const removeHeader = () => {
    document.querySelector("#sidebarBody #layers-container-box-header").remove();
}

const removeDragElements = () => {
    document.querySelectorAll("#sidebarBody .mv-grip").forEach((el) => el.remove());
}

export const insertLegend = () => {      
    let legendCopy = document.querySelector("#legend"); 
    if (document.querySelector("#sidebarBody")) {
        sidebarBody.appendChild(legendCopy);
        // remove useless
        removeDragElements();
    }
}



