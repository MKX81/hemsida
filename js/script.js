// script.js

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('header');
  let hideTimeout;

  // Funktion för att visa menyn och starta timer för att gömma den
  function showMenu() {
    header.classList.remove('hidden');
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      header.classList.add('hidden');
    }, 3000); // göm efter 3 sek utan rörelse
  }

  // Visa menyn initialt
  showMenu();

  window.addEventListener('mousemove', (e) => {
  if (e.clientY < 50) {  // Om musen är inom 50px från toppen
    showMenu();
  }
});

  // --- INFO-BANNER: klicka för att stänga ---
  const infoBanner = document.querySelector(".info-banner");
  if (infoBanner) {
    const closeBtn = infoBanner.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
      infoBanner.style.display = "none";
    });
  }

  // --- POPUP: öppna och stäng ---
  const popupOverlay = document.querySelector(".popup-overlay");
  const popupCloseBtn = popupOverlay ? popupOverlay.querySelector(".close-btn") : null;

  if (popupCloseBtn && popupOverlay) {
    popupCloseBtn.addEventListener("click", () => {
      popupOverlay.classList.remove("active");
    });

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
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  // Flytta bakgrundsposition vertikalt, t.ex. hälften av scrollvärdet
  document.body.style.backgroundPosition = `center ${scrollY * 0.5}px`;
});

