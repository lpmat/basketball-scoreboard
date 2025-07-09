let homeDisplay = document.getElementById("home-score")
let guestDisplay = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function homeAdd1P() {
    homeScore += 1
    homeDisplay.textContent = homeScore
    highlightLeader()
}

function homeAdd2P() {
    homeScore += 2
    homeDisplay.textContent = homeScore
    highlightLeader()
}

function homeAdd3P() {
    homeScore += 3
    homeDisplay.textContent = homeScore
    highlightLeader()
}

function guestAdd1P() {
    guestScore += 1
    guestDisplay.textContent = guestScore
    highlightLeader()
}

function guestAdd2P() {
    guestScore += 2
    guestDisplay.textContent = guestScore
    highlightLeader()
}

function guestAdd3P() {
    guestScore += 3
    guestDisplay.textContent = guestScore
    highlightLeader()
}

function resetP() {
    homeScore = 0
    guestScore = 0
    homeDisplay.textContent = homeScore
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