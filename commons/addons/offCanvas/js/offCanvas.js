import { insertLegend } from "./components/SidebarLegend.js";
import { insertSearch } from "./components/SidebarSearch.js";
import { insertFooter } from "./components/SidebarFooter.js";
import { createButton } from "./components/SidebarButton.js";
import { createCloseButton } from "./components/SidebarCloseButton.js";
import { initDisplaySidebar } from "./components/sidebarUtils.js";
import SwitchForm from "./components/SwitchForm/SwitchForm.js";

import { getArrondissements, getTravauxValues } from "./utils/layers.js";

import ButtonCheckForm from "./components/ButtonCheckForm/ButtonCheckForm.js";

import { cqlWfsFactory } from "./utils/filter.js";


const travauxCqlFactory = new cqlWfsFactory();

const buttonFilterType = (title, values, onClick, size) => {
  const parent = document.getElementById("sidebarBody");
  const typeBtns = new ButtonCheckForm(parent, values, title, size);
  if (onClick) {
    typeBtns.setOnClick(onClick); 
  }
  typeBtns.create();
  parent.appendChild(typeBtns.get());
}

const switchFilter = (title, values, onClick) => {
  const parent = document.getElementById("sidebarBody");
  const switchForm = new SwitchForm(values, title);
  if (onClick) {
    switchForm.setOnClick(onClick); 
  }
  switchForm.create();
  parent.appendChild(switchForm.get());
}

const onArrondClick = (formId, event, values) => {
  travauxCqlFactory.setSource(mviewer.getLayer("edp_ep").layer.getSource().getSource());
  travauxCqlFactory.cleanFilter("arrondisse");
  if (!_.isEmpty(values)) {
    travauxCqlFactory.addInFilter("arrondisse", values.map(v => parseInt(v)));
  }
  travauxCqlFactory.updateSourceUrl();
}

const onStatusClick = (formId, event, values) => {
  travauxCqlFactory.setSource(mviewer.getLayer("edp_ep").layer.getSource().getSource());
  travauxCqlFactory.cleanFilter("statut");
  if (!_.isEmpty(values)) {
    travauxCqlFactory.addInFilter("statut", values);
  }
  travauxCqlFactory.updateSourceUrl();
}

const onMotifClick = (formId, event, values) => {
  travauxCqlFactory.setSource(mviewer.getLayer("edp_ep").layer.getSource().getSource());
  travauxCqlFactory.cleanFilter("motif");
  if (!_.isEmpty(values)) {
    travauxCqlFactory.addInFilter("motif", values); 
  }
  travauxCqlFactory.updateSourceUrl();
}


const init = async () => {
  const arrondissements = await getArrondissements();
  const motifs = getTravauxValues("motif");
  const statuts = getTravauxValues("statut")
  createButton();
  createCloseButton();
  buttonFilterType("Type de réseau", ["Potable", "Non potable"], null, "xs");
  switchFilter("Statut des travaux", _.uniq(statuts), onStatusClick);
  buttonFilterType("Motifs des travaux", _.uniq(motifs), onMotifClick, "xs");
  buttonFilterType("Arrondissement", _.sortBy(arrondissements.map(a => a.value)), onArrondClick, "xs");
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
