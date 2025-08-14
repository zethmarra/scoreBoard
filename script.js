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

  if (currentScore >= points) {
    homeScoreEl.textContent = currentScore - points;
  }
}

function addGuestPoints(points) {
    const guestScoreEl = document.getElementById("guest-score");
    let currentScore = parseInt(guestScoreEl.textContent);
    guestScoreEl.textContent = currentScore + points;
}

function minusGuestPoints(points) {
  const guestScoreEl = document.getElementById("guest-score");
  let currentScore = parseInt(guestScoreEl.textContent);

  if (currentScore >= points) {
    guestScoreEl.textContent = currentScore - points;
  }
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

const teamSelect = document.getElementById("team-select");
const themeLink = document.getElementById("theme-style");
const homeLogo = document.getElementById("home-logo");
const homeName = document.getElementById("home-name");

const teamLogos = {
    lakers: "Lakers-logo.png",
    bulls: "bulls-logo.gif",
    warriors: "gsw-logo.png",
    celtics: "celtics-logo.png",
    philadelphia: "phila-logo.png",
};

teamSelect.addEventListener('change', function () {
  const selectedTeam = teamSelect.value;

  // Update CSS theme
  themeLink.setAttribute("href", selectedTeam ? `${selectedTeam}.css` : "style.css");

  // Update body class
  document.body.className = selectedTeam;

  // Update logo
  if (teamLogos[selectedTeam]) {
    homeLogo.innerHTML = `<img src="${teamLogos[selectedTeam]}" alt="${selectedTeam} logo" style="height: 50px;">`;
    homeName.textContent = '';
  } else {
    homeLogo.innerHTML = '';
    homeName.textContent = 'HOME';
  }
});

