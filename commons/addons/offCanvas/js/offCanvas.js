import { insertLegend } from "./components/SidebarLegend.js";
import { insertSearch } from "./components/SidebarSearch.js";
import { insertFooter } from "./components/SidebarFooter.js";
import { insertHeader } from "./components/SidebarHeader.js";
import { createButton } from "./components/SidebarButton.js";
import { createCloseButton } from "./components/SidebarCloseButton.js";
import { toggleSidebar } from "./components/sidebarUtils.js";
import { initDisplaySidebar } from "./components/sidebarUtils.js";

const init = async () => {
  createButton();
  createCloseButton();
  insertLegend();
  insertSearch();
  insertFooter();
  insertHeader();
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
  // In mobile device, close panel to click on map or search
  const searchtools = document.getElementById("searchtool");
  searchtools.addEventListener("input", function () {
    if (window.innerWidth < 900) {
      const searchresults = document.getElementById("searchresults");
      searchresults.addEventListener("click", function (event) {
        if (event.target.className == "geoportail list-group-item") {
          var sidebar = document.getElementById("sidebar");
          sidebar.classList.remove("active");
          var btn__sidebar = document.getElementById("sideBarNavBtn");
          btn__sidebar.classList.remove("active");
          $(".searchresults-title .close").trigger("click");
        }
      });
    }
  });
  const mapMobile = document.getElementById("map");
  mapMobile.addEventListener("click", function () {
    if (window.innerWidth < 900) {
      const sidebarPanel = document.getElementById("sidebar");
      if (sidebarPanel.classList.contains("active")) {
        toggleSidebar();
      }
    }
  });
};

new CustomComponent("offCanvas", init);
