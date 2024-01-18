const initBtnLang = () => {
  // Set lang
  const divTarget = document.querySelector(".mv-title");
  const btnLang = document.getElementById("btnSwitchLang");
  divTarget.append(btnLang);
};

new CustomComponent("btnSwitchLang", initBtnLang);
