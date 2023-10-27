const VISITS_KEY = "site-visits";

function GetSiteVisits(){
    let currentvalue = localStorage.getItem(VISITS_KEY);
    console.log(currentvalue)

    let siteVisists = 1;
    console.log(siteVisists)
    
    if(currentvalue != null ){

        siteVisists = parseInt(currentvalue) + 1;

    }
    localStorage.setItem(VISITS_KEY, `${siteVisists}`);

    return siteVisists;
}

document.getElementById("visit-count").textContent = `${GetSiteVisits()}`;