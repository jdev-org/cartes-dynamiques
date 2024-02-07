import SwitchForm from "./components/SwitchForm/SwitchForm.js";

import { getArrondissements, getTravauxValues } from "./utils/layers.js";

import ButtonCheckForm from "./components/ButtonCheckForm/ButtonCheckForm.js";

import { cqlWfsFactory } from "./utils/filter.js";

import TimeForm from "./components/TimeForm/TimeForm.js";

const travauxCqlFactory = new cqlWfsFactory();

const buttonFilterType = (title, values, onClick, size, translate) => {
  const parent = document.getElementById("filterArea");
  const typeBtns = new ButtonCheckForm(parent, values, title, size, translate);
  if (onClick) {
    typeBtns.setOnClick(onClick);
  }
  typeBtns.create();
  parent.appendChild(typeBtns.get());
};

const switchFilter = (title, values, onClick) => {
  const parent = document.getElementById("filterArea");
  const switchForm = new SwitchForm(values, title);
  if (onClick) {
    switchForm.setOnClick(onClick);
  }
  switchForm.create();
  parent.appendChild(switchForm.get());
};

const initTimeSelectors = (onClick) => {
  const parent = document.getElementById("filterArea");
  const timeForm = new TimeForm(parent, ["slider", "calendar"], "Période", "slider");
  if (onClick) {
    timeForm.setOnClick(onClick);
  }
  timeForm.createArea();
  timeForm.createSlider();
  timeForm.createCalendar();
  timeForm.showDateControler();
};

const onTimeChange = (formInstance, event, selectedDate) => {
  // prevu_deb
  // prevu_fin
  travauxCqlFactory.cleanFilter("prevu_deb");
  travauxCqlFactory.cleanFilter("prevu_fin");
  travauxCqlFactory.cleanFilter("date");
  if (selectedDate && formInstance.value === "slider") {
    // prevu_deb < (dateNow + weeks selected)
    // prevu_fin >= date now
    travauxCqlFactory.addGroupedFilter(
      "date",
      ["prevu_deb", "prevu_fin"],
      [`<= ${selectedDate}`, `>= ${moment().format(formInstance.getDateFormat())}`],
      "AND"
    );
  } else if (selectedDate) {
    // PREVU_DEB <= date <= PREVU_FIN
    travauxCqlFactory.addGroupedFilter(
      "date",
      ["prevu_deb", "prevu_fin"],
      [`<= ${selectedDate}`, `>= ${selectedDate}`],
      "AND"
    );
  }
  travauxCqlFactory.updateSourceUrl();
};

const onArrondClick = (formId, event, values) => {
  travauxCqlFactory.cleanFilter("arrondisse");
  if (!_.isEmpty(values)) {
    travauxCqlFactory.addInFilter(
      "arrondisse",
      values.map((v) => parseInt(v))
    );
  }
  travauxCqlFactory.updateSourceUrl();
};

const onStatusClick = (formId, event, values) => {
  travauxCqlFactory.cleanFilter("statut");
  if (!_.isEmpty(values)) {
    travauxCqlFactory.addInFilter("statut", values);
  }
  travauxCqlFactory.updateSourceUrl();
};

const onMotifClick = (formId, event, values) => {
  travauxCqlFactory.cleanFilter("motif");
  if (!_.isEmpty(values)) {
    travauxCqlFactory.addInFilter("motif", values);
  }
  travauxCqlFactory.updateSourceUrl();
};

const dispatchEvent = (name, content) => {
  const evt = new CustomEvent(name, { detail: content });
  document.dispatchEvent(evt);
};

const onTypeReseauClick = (formId, event, values) => {
  travauxCqlFactory.cleanFilter("nature_res");
  if (!_.isEmpty(values)) {
    travauxCqlFactory.addInFilter("nature_res", values);
  }
  travauxCqlFactory.updateSourceUrl();
};

function reset() {
  const area = document.getElementById("filterArea");
  if (area) {
    area.remove();
  }
  init();
}

const createFilters = async () => {
  const arrondissements = await getArrondissements();
  const motifs = getTravauxValues("motif");
  const statuts = getTravauxValues("statut");
  const typeReseau = getTravauxValues("nature_res");

  buttonFilterType("Type de réseau", _.uniq(typeReseau), onTypeReseauClick, "xs", true);
  switchFilter("Statut des travaux", _.uniq(statuts), onStatusClick);
  buttonFilterType("Motifs des travaux", _.uniq(motifs), onMotifClick, "xs", true);
  buttonFilterType(
    "Arrondissement",
    _.sortBy(arrondissements.map((a) => a.value)),
    onArrondClick,
    "xs"
  );
  initTimeSelectors(onTimeChange);
  dispatchEvent("edp_ep-init", { id: "edp_ep" });

  // Init current Lang
  let currentLang = API.lang || window.navigator.languages[0];
  currentLang = currentLang.includes("fr") ? "fr" : "en";
  mviewer.lang.changeLanguage(currentLang);
};
const resetFilters = () => {
  [...document.querySelectorAll(".filter-form")].forEach((x) => x.remove());
  createFilters();
  travauxCqlFactory.cleanFilters();
};
const init = async () => {
  travauxCqlFactory.setSource(mviewer.getLayer("edp_ep").layer.getSource().getSource());
  const parent = document.getElementById("sidebarBody");
  // filer panel area
  parent.insertAdjacentHTML(
    "afterbegin",
    "<div id='filterArea' class='filters-area col-xs-12'></12>"
  );
  // reset button
  const btnId = _.uniqueId();
  const btn = `<div class="col-xs-12"><button type="button" i18n="edpep.reset" class="reset-btn btn-block btn btn-warning" id="${btnId}">Réinitialiser</button></div>`;
  document.getElementById("sidebarBody").insertAdjacentHTML("afterbegin", btn);
  // reset click action
  document.getElementById(btnId).addEventListener("click", resetFilters);
  // create all filters
  createFilters();
};

// to be re init from each other mviewer elements
mviewer.customComponents.edp_ep.init = init;

new CustomComponent("edp_ep", init);
