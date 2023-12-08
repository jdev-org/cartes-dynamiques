import { display } from "./sidebarUtils.js";

const template = `
    <button id="sidebarCloseBtn" type="button" class="close">×</button>
`;
export const createCloseButton = () => {
    document.querySelector("#sidebarHeader").insertAdjacentHTML("afterbegin", template);
    sidebarCloseBtn.addEventListener("click", display);
}