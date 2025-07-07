// script.js

// --- MENY: toggla mobilmeny om du vill (här är enkel version utan hamburger) ---
// Om du vill ha hamburger-meny, kan du lägga till det senare.

// --- INFO-BANNER: klicka för att stänga ---
document.addEventListener("DOMContentLoaded", () => {
  const infoBanner = document.querySelector(".info-banner");
  if (infoBanner) {
    const closeBtn = infoBanner.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
      infoBanner.style.display = "none";
    });
  }

  // --- POPUP: öppna och stäng ---
  // Vi förutsätter popup finns i HTML med klasser popup-overlay och popup-content
  const popupOverlay = document.querySelector(".popup-overlay");
  const popupCloseBtn = popupOverlay ? popupOverlay.querySelector(".close-btn") : null;

  if (popupCloseBtn && popupOverlay) {
    popupCloseBtn.addEventListener("click", () => {
      popupOverlay.classList.remove("active");
    });

    // Klick på overlay stänger också popup (men inte om man klickar i popup-content)
    popupOverlay.addEventListener("click", (e) => {
      if (e.target === popupOverlay) {
        popupOverlay.classList.remove("active");
      }
    });
  }
});

// --- FUNKTION för att visa popup (anropa denna var du vill) ---
function showPopup() {
  const popupOverlay = document.querySelector(".popup-overlay");
  if (popupOverlay) {
    popupOverlay.classList.add("active");
  }
}

// --- BOKNINGSMEDDELANDE ---
function visaBokningsmeddelande() {
  const meddelande = document.getElementById("bokningsmeddelande");
  if (meddelande) {
    meddelande.textContent = "Tack! Vi återkommer inom kort med en bekräftelse.";
    meddelande.style.color = "#009739";
    meddelande.style.marginTop = "1rem";
  }
}
const header = document.querySelector('header');
let hideTimeout;

// Visa menyn och starta timer för att gömma
function showMenu() {
  header.classList.remove('hidden');
  clearTimeout(hideTimeout);
  hideTimeout = setTimeout(() => {
    header.classList.add('hidden');
  }, 3000); // göm efter 3 sek utan rörelse vid toppen
}
