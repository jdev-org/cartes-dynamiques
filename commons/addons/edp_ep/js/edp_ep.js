import SwitchForm from "./components/SwitchForm/SwitchForm.js";

import { getArrondissements, getTravauxValues } from "./utils/layers.js";

import ButtonCheckForm from "./components/ButtonCheckForm/ButtonCheckForm.js";

import { cqlWfsFactory } from "./utils/filter.js";

import TimeForm from "./components/TimeForm/TimeForm.js";

const travauxCqlFactory = new cqlWfsFactory();

const buttonFilterType = (title, values, onClick, size, translate, isAccordion) => {
  const parent = document.getElementById("filterArea");
  const typeBtns = new ButtonCheckForm(parent, values, title, size, translate, isAccordion);
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
  timeForm.createCalendar('date-start','Date de début');
  timeForm.createCalendar('date-end','Date de fin');
  timeForm.showDateControler("slider");
};

const onTimeChange = (formInstance, event, selectedDate) => {  
  // prevu_deb
  // prevu_fin
  travauxCqlFactory.cleanFilter("prevu_deb");
  travauxCqlFactory.cleanFilter("prevu_fin");
  travauxCqlFactory.cleanFilter("date");
  let timeFilter = document.querySelector('#switchRadioFilterTime input[type="radio"]:checked');
  if (selectedDate && timeFilter.value === "slider") {
    // prevu_deb < (dateNow + weeks selected)
    // prevu_fin >= date now
    travauxCqlFactory.addGroupedFilter(
      "date",
      ["prevu_deb", "prevu_fin"],
      [`<= ${selectedDate}`, `>= ${moment().format(formInstance.getDateFormat())}`],
      "AND"
    );
  } else if (selectedDate && timeFilter.value === "calendar") {
    let dateStart = document.querySelector('input.date-start').value;
    dateStart = moment(dateStart, "DD-MM-YYYY").format('YYYYMMDDHHmmss');
    let dateEnd = document.querySelector('input.date-end').value;
    dateEnd = moment(dateEnd, "DD-MM-YYYY").add({hours:23,minutes:59}).format('YYYYMMDDHHmmss');  
    if(dateStart != 'Invalid date' && dateEnd != 'Invalid date'){
      travauxCqlFactory.addGroupedFilterExpression(
        "date",
        `(prevu_deb >= ${dateStart} AND prevu_deb <= ${dateEnd}) OR (prevu_fin >= ${dateStart} AND prevu_fin <= ${dateEnd}) OR (prevu_deb <= ${dateStart} AND prevu_fin >= ${dateEnd})`        
      );
    }    
  }
  travauxCqlFactory.updateSourceUrl();
};

const onArrondClick = (formId, event, values) => {
  travauxCqlFactory.cleanFilter("arrondisse");
  if (!_.isEmpty(values)) {
    travauxCqlFactory.addInFilter(
      "arrondisse",
      values.map((v) => v)
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
  //const typeReseau = getTravauxValues("nature_res");
  //const statuts = getTravauxValues("statut");
  const statuts = ['PREVU','EN COURS'];
  const typeReseau = ['EP','ENP'];  
  buttonFilterType("Types de réseau", _.uniq(typeReseau), onTypeReseauClick, "xs", true);
  switchFilter("Statuts des travaux", _.uniq(statuts), onStatusClick);  
  //buttonFilterType("Motifs des travaux", _.uniq(motifs), onMotifClick, "xs", true, true);
  buttonFilterType(
    "Arrondissements",
    _.sortBy(arrondissements.map((a) => a.value)),
    onArrondClick,
    "xs",
    false, true
  );
  initTimeSelectors(onTimeChange);
  dispatchEvent("edp_ep-init", { id: "edp_ep" });

  // Init current Lang
  let currentLang = API.lang || window.navigator.languages[0];
  currentLang = currentLang.includes("fr") ? "fr" : "en";
  mviewer.lang.changeLanguage(currentLang);
};
const resetFilters = async () => {
  [...document.querySelectorAll(".filter-form")].forEach((x) => x.remove()); 
  travauxCqlFactory.cleanFilters(); 
  const clusterSource = mviewer.getLayers().edp_ep.layer.getSource(); 
  const clusters = await clusterSource.getFeatures();
  if (_.isEmpty(clusters)) {
    createFilters();  
  }  
};
const init = async () => {
  travauxCqlFactory.setSource(mviewer.getLayer("edp_ep").layer.getSource().getSource());
  const parent = document.getElementById("sidebarBody");
  // filer panel area
  parent.insertAdjacentHTML(
    "afterbegin",
    "<div id='filterArea' class='filters-area'></12>"
  );
  // reset button
  const btnId = _.uniqueId();
  const btn = `<h4 id="headerFilter" class="">
    <span>Recherche avancée</span>
    <button class="reset-btn" id="${btnId}" title="Réinitialiser">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor">
        <path
          d="M12 4C14.7486 4 17.1749 5.38626 18.6156 7.5H16V9.5H22V3.5H20V5.99936C18.1762 3.57166 15.2724 2 12 2C6.47715 2 2 6.47715 2 12H4C4 7.58172 7.58172 4 12 4ZM20 12C20 16.4183 16.4183 20 12 20C9.25144 20 6.82508 18.6137 5.38443 16.5H8V14.5H2V20.5H4V18.0006C5.82381 20.4283 8.72764 22 12 22C17.5228 22 22 17.5228 22 12H20Z"></path>
      </svg>
    </button>
  </h4>`;
  mviewer.waitForElm('#sidebarHeader').then((elm) => {                   
    elm.insertAdjacentHTML("beforeend", btn);
    document.getElementById(btnId).addEventListener("click", resetFilters);
  }); 
  // reset click action  
  // create all filters
  createFilters();
};

// to be re init from each other mviewer elements
mviewer.customComponents.edp_ep.init = init;

new CustomComponent("edp_ep", init);
