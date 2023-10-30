const LAST_VISIT_DATE_KEY = 'last-visit'
const DAY_IN_MS = 24*60*60*1000;

function getDiscoverMessage(){
    let message = "Welcome, let us know if you have any questions."
    let lastVisitValue = localStorage.getItem(LAST_VISIT_DATE_KEY)
    let today = new Date();
    if(lastVisitValue != null){
        lastVisit = parseInt(lastVisitValue)
        daysSinceLastVisit = Math.floor((today.getTime() - lastVisit) / DAY_IN_MS)
        if (daysSinceLastVisit == 0){
            message = "Back again? Jesus..."
        }
        else{
            if (daysSinceLastVisit == 1){
                message = "You last visited 1 day ago."
            }
            else{
                message = `You last visited ${daysSinceLastVisit} days ago.`
            }
        }
    
    }
    localStorage.setItem(LAST_VISIT_DATE_KEY, `${today.getTime()}`)
    return message;
}

document.querySelector("#counter-message h2").textContent = getDiscoverMessage()