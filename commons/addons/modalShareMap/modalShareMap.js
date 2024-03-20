const initModalShareMap = () => {

	// Delete init btn 
	const initBtnShare = document.getElementById("sharebtn");
	initBtnShare.remove();

	// Insert new btn to toolsbar
	const toolsbar = document.getElementById("toolstoolbar");
	const btnModalShare = document.getElementById("btnModalShareMap");
	toolsbar.insertAdjacentElement("beforeend", btnModalShare);

	//Defining custom component functions
	function initModalIhm() {
		let blocksDisplay = document.querySelectorAll(".blockShare__mode.block__display");
		if (blocksDisplay.length > 0) {
			blocksDisplay.forEach((element) => element.classList.remove('block__display'));
		}
	};

	function getUrlMapToShare(mode) {
		// Set mode params with new radio modal
		let url = new URL(mviewer.setPermalink());
		var search_params = url.searchParams;
		search_params.set('mode', mode);
		url.search = search_params.toString();
		var new_url = url.toString();
		return new_url;
	}

	function setUrlBtnShare(url) {
		// Create all url for each btn 
		let urlLink = url;
		let urlEmail = `mailto:${mviewer?.env?.mailto_dest}?subject=Où boire de l'eau de Paris ?&body=` + encodeURIComponent(url);
		let urlFacebook = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
		let urlX = "https://twitter.com/intent/post?url=" + encodeURIComponent(url);
		let urlLinkedin = "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(url);
		let urlWhatapp = "https://wa.me/?text=" + encodeURIComponent(url);
		let urlIframe = `<iframe width="800" height="500" style="border:none;" src="${url}"></iframe>`;
		// Get all btn in modal 
		const btnEmail = document.getElementById('btnShareEmail');
		const btnFacebook = document.getElementById('btnShareFacebook');
		const btnX = document.getElementById('btnShareX');
		const btnLinkedin = document.getElementById('btnShareLinkedin');
		const btnWhatapp = document.getElementById('btnShareWhatapp');
		// Url to href for each btn
		btnEmail.setAttribute("href", urlEmail);
		btnFacebook.setAttribute("href", urlFacebook);
		btnX.setAttribute("href", urlX);
		btnLinkedin.setAttribute("href", urlLinkedin);
		btnWhatapp.setAttribute("href", urlWhatapp);
		//Add link to blocLinkCopy & blcoIframe
		document.getElementById("blockLinkUrl").innerText = urlLink;
		document.getElementById("blockIframeUrl").innerText = urlIframe;
	}

	// Init of links when the modal is opened
	btnModalShare.addEventListener("click", function() {
		/* Init IHM */
		initModalIhm();
		// Get display mode 
		let modeDisplay = document.querySelector(".inputShare__mode input:checked").value;
		// Get URL Permalink
		let urlMap = getUrlMapToShare(modeDisplay);
		//Add link and href for each btn 
		setUrlBtnShare(urlMap);
	});

	// Links updated when a different display mode is selected
	let radioBtnMode = document.querySelectorAll(".inputShare__mode input");
	radioBtnMode.forEach((radio) =>
		radio.addEventListener("click", function(event) {
			// Get display mode 
			let modeDisplay = event.target.value;
			// Update URL Permalink
			let urlMap = getUrlMapToShare(modeDisplay);
			//Update link and href for each btn 
			setUrlBtnShare(urlMap);
		})
	);

	//Conditional block display management 
	btnShareLink.addEventListener("click", function() {
		let x = document.querySelector("#blockIframe.block__display");
		if (x) {
			x.classList.remove('block__display');
		};
		const blockLink = document.getElementById('blockLink');
		blockLink.classList.toggle('block__display');
	});

	btnShareIframe.addEventListener("click", function() {
		let x = document.querySelector("#blockLink.block__display");
		if (x) {
			x.classList.remove('block__display');
		};
		const blockLink = document.getElementById('blockIframe');
		blockLink.classList.toggle('block__display');
	})
}

new CustomComponent("modalShareMap", initModalShareMap);
