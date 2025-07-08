document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('header');
  let hideTimeout;

  // Gör header "opaque" (normal bakgrund och textfärg)
  function makeOpaque() {
    header.classList.remove('transparent');
  }

  // Gör header transparent (ingen bakgrund, vit text)
  function makeTransparent() {
    header.classList.add('transparent');
  }

  // Starta/timern som byter till transparent efter 3 sek utan musrörelse
  function resetTimer() {
    makeOpaque();
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      makeTransparent();
    }, 3000);
  }

  // Visa header som opaque initialt
  makeOpaque();

  // Lyssna på musrörelse
window.addEventListener('mousemove', (e) => {
  const headerRect = header.getBoundingClientRect();
  
  // Kolla om musen är inom header-området
  if (
    e.clientY >= headerRect.top &&
    e.clientY <= headerRect.bottom &&
    e.clientX >= headerRect.left &&
    e.clientX <= headerRect.right
  ) {
    makeOpaque();
    clearTimeout(hideTimeout);
  } else {
    resetTimer();
  }
});


  // Starta timer direkt
  resetTimer();

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
  document.body.style.backgroundPosition = `center ${scrollY * 0.5}px`;
});

document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown > a');
  const menu = dropdown?.nextElementSibling;

  if (dropdown && menu) {
    dropdown.addEventListener('click', function (e) {
      e.preventDefault();
      // Stäng alla andra öppna dropdowns (valfritt)
      document.querySelectorAll('.dropdown-menu').forEach(m => {
        if (m !== menu) m.style.display = 'none';
      });

      // Toggle meny
      menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });

    // Klick utanför dropdown stänger menyn (valfritt)
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.dropdown')) {
        menu.style.display = 'none';
      }
    });
  }
});

