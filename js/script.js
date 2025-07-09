document.addEventListener("DOMContentLoaded", () => {
  // --- Header transparent/opaque ---
  const header = document.querySelector('header');
  let hideTimeout;

  function makeOpaque() {
    header.classList.remove('transparent');
  }

  function makeTransparent() {
    header.classList.add('transparent');
  }

  function resetTimer() {
    makeOpaque();
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      makeTransparent();
    }, 3000);
  }

  makeOpaque();

  window.addEventListener('mousemove', (e) => {
    const headerRect = header.getBoundingClientRect();
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

  resetTimer();

  // --- Hamburger-meny ---
  const toggle = document.getElementById("menu-toggle-header");
  const nav = document.getElementById("nav-links-header");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });

    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    });
  }

  // --- Info-banner stängning ---
  const infoBanner = document.querySelector(".info-banner");
  if (infoBanner) {
    const closeBtn = infoBanner.querySelector(".close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        infoBanner.style.display = "none";
      });
    }
  }

  // --- Popup hantering ---
  const popupOverlay = document.querySelector(".popup-overlay");
  if (popupOverlay) {
    const popupCloseBtn = popupOverlay.querySelector(".close-btn");
    if (popupCloseBtn) {
      popupCloseBtn.addEventListener("click", () => {
        popupOverlay.classList.remove("active");
      });
    }

    popupOverlay.addEventListener("click", (e) => {
      if (e.target === popupOverlay) {
        popupOverlay.classList.remove("active");
      }
    });
  }

  // --- Kontaktformulär validering ---
  const form = document.getElementById("kontaktformulär");
  const feedback = document.getElementById("feedback");

  if (form && feedback) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const namn = document.getElementById("namn").value.trim();
      const epost = document.getElementById("epost").value.trim();
      const meddelande = document.getElementById("meddelande").value.trim();

      if (!namn || !epost || !meddelande) {
        feedback.textContent = "Fyll i alla fält.";
        feedback.style.color = "red";
        return;
      }

      feedback.textContent = "Tack för ditt meddelande!";
      feedback.style.color = "green";
      form.reset();
    });
  }

  // --- Parallax scroll på bakgrund ---
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.body.style.backgroundPosition = `center ${scrollY * 0.5}px`;
  });

  // --- Dropdown meny ---
  const dropdown = document.querySelector('.dropdown > a');
  const menu = dropdown ? dropdown.nextElementSibling : null;

  if (dropdown && menu) {
    dropdown.addEventListener('click', (e) => {
      e.preventDefault();

      // Dölj andra dropdown-menyer (om fler finns)
      document.querySelectorAll('.dropdown-menu').forEach(m => {
        if (m !== menu) m.style.display = 'none';
      });

      menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
        menu.style.display = 'none';
      }
    });
  }

  // --- Slideshow ---
  let slideIndex = 1;

  function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  window.plusSlides = function (n) {
    showSlides(slideIndex += n);
  }

  window.currentSlide = function (n) {
    showSlides(slideIndex = n);
  }

  showSlides(slideIndex);
});

// --- Externa funktioner för popup och bokningsmeddelande ---
function showPopup() {
  const popupOverlay = document.querySelector(".popup-overlay");
  if (popupOverlay) {
    popupOverlay.classList.add("active");
  }
}

function visaBokningsmeddelande() {
  const meddelande = document.getElementById("bokningsmeddelande");
  if (meddelande) {
    meddelande.textContent = "Tack! Vi återkommer inom kort med en bekräftelse.";
    meddelande.style.color = "#009739";
    meddelande.style.marginTop = "1rem";
  }
}
