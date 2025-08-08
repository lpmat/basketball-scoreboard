let homeDisplay = document.getElementById("home-score")
let guestDisplay = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function homeAddPoints(value) {
    homeScore += value
    homeDisplay.textContent = homeScore
    highlightLeader()
}

function guestAddPoints(value) {
    guestScore += value
    guestDisplay.textContent = guestScore
    highlightLeader()
}

function highlightLeader() {
    if (homeScore > guestScore) {
        homeDisplay.classList.add("highlight")
        guestDisplay.classList.remove("highlight")
    } else if (guestScore > homeScore) {
        homeDisplay.classList.remove("highlight")
        guestDisplay.classList.add("highlight")
    } else {
        homeDisplay.classList.remove("highlight")
        guestDisplay.classList.remove("highlight")
    }    
}

let homeFoulsDisplay = document.getElementById("home-fouls")
let guestFoulsDisplay = document.getElementById("guest-fouls")

let homeFouls = 0
let guestFouls = 0

function homeFoul() {
    homeFouls += 1
    homeFoulsDisplay.textContent = homeFouls
}

function guestFoul() {
    guestFouls += 1
    guestFoulsDisplay.textContent = guestFouls
}

function reset() {
    homeScore = 0
    guestScore = 0
    homeDisplay.textContent = homeScore
    guestDisplay.textContent = guestScore
    highlightLeader()
    homeFouls = 0
    guestFouls = 0
    homeFoulsDisplay.textContent = homeFouls
    guestFoulsDisplay.textContent = guestFouls
}