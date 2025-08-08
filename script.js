function toggleBonus(el) {
  el.textContent = el.textContent === "☐" ? "✖" : "☐";
}

function addHomePoints(points) {
    const homeScoreEl = document.getElementById("home-score");
    let currentScore = parseInt(homeScoreEl.textContent);
    homeScoreEl.textContent = currentScore + points;
}

function minusHomePoints(points) {
    const homeScoreEl = document.getElementById("home-score");
    let currentScore = parseInt(homeScoreEl.textContent);
    homeScoreEl.textContent = currentScore - points;
}

function addGuestPoints(points) {
    const guestScoreEl = document.getElementById("guest-score");
    let currentScore = parseInt(guestScoreEl.textContent);
    guestScoreEl.textContent = currentScore + points;
}

function minusGuestPoints(points) {
    const guestScoreEl = document.getElementById("guest-score");
    let currentScore = parseInt(guestScoreEl.textContent);
    guestScoreEl.textContent = currentScore - points;
}

function nextPeriod() {
    const periodSelector = document.getElementById("period");
    let currentPeriod = parseInt(periodSelector.textContent);
    
    if (currentPeriod < 4) {
        currentPeriod += 1;
        periodSelector.textContent = currentPeriod;
    }
}

function previousPeriod() {
    const periodSelector = document.getElementById("period");
    let currentPeriod = parseInt(periodSelector.textContent);
    
    if (currentPeriod > 1) {
        currentPeriod -= 1;
        periodSelector.textContent = currentPeriod;
    }
}

function reset() {
    const periodSelector = document.getElementById("period");
    const homeScoreEl = document.getElementById("home-score");
    const guestScoreEl = document.getElementById("guest-score");

    periodSelector.textContent = 1;
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
}