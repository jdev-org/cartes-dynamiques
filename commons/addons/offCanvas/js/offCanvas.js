import { insertLegend } from "./components/SideBarLegend.js";
import { createButton } from "./components/SidebarButton.js";
import { createCloseButton } from "./components/SidebarCloseButton.js";
import SidebarLists from "./components/SidebarLists.js";

const init = () => {
    createButton();
    createCloseButton();
    insertLegend();
}
new CustomComponent("offCanvas", init);
