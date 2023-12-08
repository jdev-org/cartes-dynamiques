
import { display } from "./sidebarUtils.js";

const template = `
<a type="button" id="sideBarNavBtn" class="navbar-brand" href="#" style="display: block !important;">
  <span class="glyphicon glyphicon-menu-hamburger"></span>
</a>
`;

export const createButton = () => {
    const parentNavBtn = document.querySelector(".navbar-brand.menu-toggle")?.parentElement;
    parentNavBtn.insertAdjacentHTML("afterbegin", template);
    sideBarNavBtn.addEventListener("click", display)
}