const intro = document.getElementById('intro');
const startKnop = document.getElementById('start-intro');
const audio = document.getElementById('Achtergrondmuziekje');

// Als je op de startknop klikt:
startKnop.addEventListener('click', () => {
    intro.style.display = 'none'; // Intro-scherm verdwijnt
    audio.volume = 0.1; // Zet het muziekje lekker zacht
    audio.play(); // Start de muziek
});

// Variabelen die we nodig hebben voor het spel
let getal = 0;
let levens = 3; // Je hebt 3 kansen om het goed te raden
let mystery = Math.floor(Math.random() * 10) + 1; // De computer kiest een getal tussen 1 en 10
console.log("Mystery is:", mystery); // Om aan te tonen of dit goed is gekoppeld met het HTML bestand

// HTML code die we kunnen aanpassen met JS 
const weergave = document.querySelector('#weergave'); // Waar jouw getal wordt getoond
const hintEl = document.querySelector('#hint'); // Hier komt de hint ("Te hoog!" of "Goed zo!")
const levensEl = document.querySelector('#levens'); // Laat zien hoeveel levens je nog hebt
const plusBtn = document.querySelector('#plus'); // De knop om je getal hoger te maken
const minBtn = document.querySelector('#min'); // De knop om je getal lager te maken
const checkBtn = document.querySelector('#controleer'); // De knop om te checken of je goed zit

// Functie om alles op het scherm te verversen
function updateUI() {
    weergave.textContent = getal; // Laat het gekozen getal zien
    levensEl.textContent = 'Levens: ' + '❤️'.repeat(levens); // Laat hartjes zien voor levens
}

// Als je op de plusknop klikt, gaat je getal 1 omhoog
plusBtn.addEventListener('click', () => {
    getal++;
    updateUI(); 
});

// Als je op de minknop klikt, gaat je getal 1 omlaag (maar niet onder 0)
minBtn.addEventListener('click', () => {
    if (getal > 0) getal--;
    updateUI();
});

// Als je op "controleer" klikt, kijken we of je het getal goed hebt
checkBtn.addEventListener('click', () => {
    if (getal === mystery) {
        hintEl.textContent = 'Goed geraden!';
        checkBtn.disabled = true; // Je hoeft niet meer te raden
    } else {
        levens--; // Je verliest een leven
        // Geeft een hint of je hoger of lager moet raden
        hintEl.textContent = getal < mystery ? 'Te laag!' : 'Te hoog!';
        updateUI(); // Laat het nieuwe aantal levens zien
        if (levens === 0) {
            alert('Game Over! Het juiste getal was ' + mystery);
            location.reload();
        }
        }
});

updateUI();
