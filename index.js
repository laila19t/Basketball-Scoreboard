let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById("guest-score-el");
let homeCount=0;
let guestCount=0;

function addOneHome(){
    homeCount+=1;
    homeScoreEl.textContent=homeCount
}

function addTwoHome(){
    homeCount+=2;
    homeScoreEl.textContent=homeCount
}

function addThreeHome(){
    homeCount+=3;
    homeScoreEl.textContent=homeCount
}

function addOneGuest(){
    guestCount+=1;
    guestScoreEl.textContent=guestCount
}

function addTwoGuest(){
    guestCount+=2;
    guestScoreEl.textContent=guestCount
}

function addThreeGuest(){
    guestCount+=3;
    guestScoreEl.textContent=guestCount
}