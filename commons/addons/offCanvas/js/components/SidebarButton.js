
import { toggleSidebar } from "./sidebarUtils.js";

const template = `
<a type="button" id="sideBarNavBtn" class="navbar-brand" href="#">
<i class="fas fa-bars"></i>
</a>
`;

export const createButton = () => {
    const parentNavBtn = document.querySelector(".navbar-brand.menu-toggle")?.parentElement;
    parentNavBtn.insertAdjacentHTML("afterbegin", template);
    sideBarNavBtn.addEventListener("click", toggleSidebar);
}