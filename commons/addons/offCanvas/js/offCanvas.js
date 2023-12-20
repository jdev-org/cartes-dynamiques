import { insertLegend  } from "./components/SidebarLegend.js";
import { insertSearch  } from "./components/SidebarSearch.js";
import { insertFooter  } from "./components/SidebarFooter.js";
import { createButton } from "./components/SidebarButton.js";
import { createCloseButton } from "./components/SidebarCloseButton.js";
import { initDisplaySidebar } from "./components/sidebarUtils.js";
import SidebarLists from "./components/SidebarLists.js";

const init = () => {
    createButton();
    createCloseButton();    
    insertLegend();
    insertSearch();
    insertFooter();
    initDisplaySidebar();
    window.addEventListener("resize", function(){insertLegend()}, true);
}

new CustomComponent("offCanvas", init);
