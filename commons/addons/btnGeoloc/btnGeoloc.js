const initBtnGeoloc = () => {
  // Init current Lang
  let currentLang = API.lang || window.navigator.languages[0];
  currentLang = currentLang.includes("fr") ? "fr" : "en";
  mviewer.lang.changeLanguage(currentLang);  
  document.getElementById('btnGeoloc').addEventListener('click', function(){   
    mviewer.getMap().once('moveend', function(){
      mviewer.getMap().getView().setZoom(16);    
    });    
    mviewer.geoloc();
  });
};

new CustomComponent("btnGeoloc", initBtnGeoloc);
