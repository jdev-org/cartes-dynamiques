import { getOptions } from "./sidebarUtils.js";

let options = () => getOptions();

export async function insertFooter() {
  if (options()?.templateFooterUrl) {
    sidebarFooter.style.display = "block";
    const callhtml = await fetch(options()?.templateFooterUrl);
    const htmltext = await callhtml.text();
    sidebarFooter.innerHTML = htmltext;
    // Init current Lang
    let currentLang = API.lang || window.navigator.languages[0];
    currentLang = currentLang.includes("fr") ? "fr" : "en";
    mviewer.lang.changeLanguage(currentLang);
  }
}
