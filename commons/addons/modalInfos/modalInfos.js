const modalInfos = (function () {
  /**
   * Plugin's config
   */
  const getId = () => configuration.getConfiguration()?.application["id"];
  let config = () => mviewer.customComponents.modalInfos.config;
  let options = () => config()?.options?.mviewer[getId()];

  /**
   * Create btn
   */
  function createBtnModal() {
    const btnModal = document.getElementById("btnModalInfos");
    btnModal.innerHTML = options()?.btnModalLabel
      ? options()?.btnModalLabel
      : "Informations";
  }

  /**
   * Create btn mobile
   */
  function createBtnModalMobile() {
    const toolstoolbar = document.getElementById("toolstoolbar");
    const btnModalMobile = `<a id="btnModalInfosMobile" class="btn btn-default btn-raised" type="button" title="Informations" data-toggle="modal" data-target="#modalInfos">
    <i class="fas fa-info-circle"></i>
</a>`;
    toolstoolbar.insertAdjacentHTML("beforeend", btnModalMobile);
  }

  /**
   * Define modal size
   * Value : default / large / small
   */
  function resizeModal() {
    const modalDialog = document.querySelector("#modalInfos .modal-dialog");
    let modalSize = options()?.modalSize;
    if (modalSize == "large") {
      modalDialog.classList.add("modal-lg");
    } else if (modalSize == "small") {
      modalDialog.classList.add("modal-sm");
    } else {
    }
  }

  /**
   * Add content html to modal body
   */
  async function getContentModal() {
    if (options()?.templateModalUrl) {
      const callhtml = await fetch(options()?.templateModalUrl);
      const htmltext = await callhtml.text();
      $("#modalInfos .modal-body").append(htmltext);
    }
  }

  return {
    init: function () {
      if (config()?.options?.mviewer[getId()]) {
        createBtnModal();
        createBtnModalMobile();
        resizeModal();
        getContentModal();
      } else {
        alert(
          "Configuration du plugin modalInfos erronée ou inexistante pour l'application"
        );
      }
    },
  };
})();

new CustomComponent("modalInfos", modalInfos.init);
