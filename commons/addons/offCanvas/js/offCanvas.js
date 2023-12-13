import { insertLegend  } from "./components/SideBarLegend.js";
import { createButton } from "./components/SidebarButton.js";
import { createCloseButton } from "./components/SidebarCloseButton.js";
import { initDisplaySidebar } from "./components/sidebarUtils.js";
import SidebarLists from "./components/SidebarLists.js";


const init = () => {
    createButton();
    createCloseButton();    
    insertLegend();
    initDisplaySidebar();
    window.addEventListener("resize", function(){insertLegend()}, true);
}


new CustomComponent("offCanvas", init);
