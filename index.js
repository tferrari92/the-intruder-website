
// Get the user's browser language (userLocale)
const userLocale =
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language;


// Keep only the first two letters of the string
preferedLanguage = userLocale[0] + userLocale[1]


// Set the isEnglish variable depending on the language
let isInSpanish

if (preferedLanguage == "es") {
    isInSpanish = true
} else {
    isInSpanish = false
}

// Change site to Spanish on first load if necessary
function initialLanguageCheck() {
    if (isInSpanish) {
        switchToSpanish()
    }
}

let body = document.getElementById("body")
body.onload = initialLanguageCheck



// Set all associations for translatable Strings
let welcomeTo = document.getElementById("Welcome-to")
let theIntruder = document.getElementById("The-Intruder")
let partyGame = document.getElementById("Party-Game")
let getItNow = document.getElementById("Get-it-now")
let indexParagraph = document.getElementById("index-paragraph")
let theSimplest = document.getElementById("The-simplest")
let forUpTo = document.getElementById("For-up-to")
let noInternet = document.getElementById("No-internet")
let gameRules = document.getElementById("Game-rules")
let terms = document.getElementById("Terms")
let icons = document.getElementById("Icons")



function switchToEnglish() {
    // Switch to appropiate language
    isInSpanish = !isInSpanish

    welcomeTo.textContent = "Welcome to"
    theIntruder.textContent = "The Intruder"
    partyGame.textContent = "Party Game"
    getItNow.textContent = "Get it now for free!"
    indexParagraph.innerHTML = 'At your next <span class="bolded">party or meeting</span> you cannot miss The Intruder.<br/> The <span class="bolded">Local Party Game</span> for between 5 and 16 players that will take your meetings to the next level of <span class="bolded">fun</span>.<br/> Who looks the <span class="bolded">most suspicious</span>? Will they find <span class="bolded">The Intruder</span> before he wins?'
    theSimplest.innerHTML = "The simplest<br/>social deduction game"
    forUpTo.textContent = "For up to 16 players"
    noInternet.innerHTML = "No internet<br/>connection required"
    gameRules.textContent = "Rules"
    terms.textContent = "Terms and conditions"
    icons.textContent = "Icons by Icons8"
}

function switchToSpanish() {
    // Switch to appropiate language
    isInSpanish = !isInSpanish

    welcomeTo.textContent = "Bienvenidos a"
    theIntruder.textContent = "El Intruso"
    partyGame.textContent = "Party Game"
    getItNow.textContent = "¡Consíguelo gratis ya!"
    indexParagraph.innerHTML = 'En tu próxima <span class="bolded">fiesta o reunión</span> no podrá faltar El Intruso.<br/> El <span class="bolded">Party Game Local</span> para entre 5 y 16 jugadores que va a llevar tus reuniones al siguiente nivel de <span class="bolded">diversión</span>.<br/> ¿Quién parece <span class="bolded">más sospechoso</span>? Descubrirán a <span class="bolded">El Intruso</span> antes que gane?'
    theSimplest.innerHTML = "El juego de deducción<br/>social más simple"
    forUpTo.textContent = "Para hasta 16 jugadores"
    noInternet.innerHTML = "No requiere<br/>conexión a internet"
    gameRules.textContent = "Reglas"
    terms.textContent = "Terminos y condiciones"
    icons.textContent = "Icons by Icons8"
}

// Show appropiate Terms page depending on language
function redirectToAppropiateTerms() {

    let terms = document.getElementById("Terms")

    if (isInSpanish) {
        terms.setAttribute("href", "terms-es.html")
    } else {
        terms.setAttribute("href", "terms.html")
    }
}