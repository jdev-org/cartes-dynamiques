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
        const btnModal = document.getElementById('btnModalInfos');
        btnModal.innerHTML = options()?.btnModalLabel ? options()?.btnModalLabel : 'Informations';     
    }

    /**
    * Define modal size 
    * Value : default / large / small
    */
    function resizeModal() {
        const modalDialog = document.querySelector('#modalInfos .modal-dialog');
        let modalSize = options()?.modalSize;
        if (modalSize == 'large') {
            modalDialog.classList.add("modal-lg");
        } else if (modalSize == 'small') {
            modalDialog.classList.add("modal-sm");
        } else{}
    }

    /**
    * Add content html to modal body
    */
    function getContentModal() {
        if (options()?.templateModalUrl) {
            fetch(options()?.templateModalUrl).then(function (response) {
                // The API call was successful!
                return response.text();
            }).then(function (html) {
                $("#modalInfos .modal-body").append(html);
            });            
        }
    }   
      
    return {
      init: function () {
        if(config()?.options?.mviewer[getId()]){
            createBtnModal();
            resizeModal();
            getContentModal();
        } else{
            alert("Configuration du plugin modalInfos erronée ou inexistante pour l'application")
        }        
      },
    };
})();
  
new CustomComponent("modalInfos", modalInfos.init);
  
