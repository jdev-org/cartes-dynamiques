import { insertLegend } from "./components/SidebarLegend.js";
import { insertSearch } from "./components/SidebarSearch.js";
import { insertFooter } from "./components/SidebarFooter.js";
import { createButton } from "./components/SidebarButton.js";
import { createCloseButton } from "./components/SidebarCloseButton.js";
import { initDisplaySidebar } from "./components/sidebarUtils.js";
import SwitchForm from "./components/SwitchForm/SwitchForm.js";

import { getArrondissements, getTravauxValues } from "./utils/layers.js";

import ButtonCheckForm from "./components/ButtonCheckForm/ButtonCheckForm.js";

const buttonFilterType = (title, values, size) => {
  const parent = document.getElementById("sidebarBody");
  const typeBtns = new ButtonCheckForm(parent, values, title, size);
  typeBtns.create();
}

const switchFilter = (title, values) => {
  const parent = document.getElementById("sidebarBody");
  const switchForm = new SwitchForm(values, title);
  switchForm.create();

  parent.appendChild(switchForm.get());
}

const init = async () => {
  const arrondissements = await getArrondissements();
  const travaux = getTravauxValues("motif");
  const statuts = getTravauxValues("statut")
  createButton();
  createCloseButton();
  buttonFilterType("Type de réseau", ["Potable", "Non potable"], "xs");
  switchFilter("Statut des travaux", _.uniq(statuts));
  buttonFilterType("Motifs des travaux", _.uniq(travaux), "xs");
  buttonFilterType("Arrondissement", _.sortBy(arrondissements.map(a => a.value)), "xs");
  insertLegend();
  insertSearch();
  insertFooter();
  initDisplaySidebar();
  window.addEventListener(
    "resize",
    function () {
      insertLegend();
    },
    true
  );
  // Init current Lang
  let currentLang = API.lang || window.navigator.languages[0];
  currentLang = currentLang.includes("fr") ? "fr" : "en";
  mviewer.lang.changeLanguage(currentLang);
};

new CustomComponent("offCanvas", init);
