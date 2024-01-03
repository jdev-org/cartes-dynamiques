export const insertSearch = () => {      
    let searchBar = document.querySelector("#searchtool"); 
    let searchResult = document.querySelector("#searchresults"); 
    if (document.querySelector("#sidebarHeader")) {
        sidebarHeader.appendChild(searchBar);
        sidebarHeader.appendChild(searchResult);
    }
}



