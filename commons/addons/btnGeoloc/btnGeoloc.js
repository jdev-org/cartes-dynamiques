const initBtnGeoloc = () => {
  // Init current Lang
  let currentLang = API.lang || window.navigator.languages[0];
  currentLang = currentLang.includes("fr") ? "fr" : "en";
  mviewer.lang.changeLanguage(currentLang);
};

new CustomComponent("btnGeoloc", initBtnGeoloc);
