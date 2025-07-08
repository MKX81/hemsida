document.addEventListener("DOMContentLoaded", () => {
  // Header transparent/opaque
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

  document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");
  const navLinks = document.querySelectorAll("#nav-links a");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
});


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

  // Info-banner stäng knapp
  const infoBanner = document.querySelector(".info-banner");
  if (infoBanner) {
    const closeBtn = infoBanner.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
      infoBanner.style.display = "none";
    });
  }

  // Popup hantering
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

  // Kontaktformulär
  const form = document.getElementById("kontaktformulär");
  const feedback = document.getElementById("feedback");

  if (form && feedback) {
    form.addEventListener("submit", function (e) {
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

  // Parallax scroll för bakgrund
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.body.style.backgroundPosition = `center ${scrollY * 0.5}px`;
  });

  // Dropdown-meny
  const dropdown = document.querySelector('.dropdown > a');
  const menu = dropdown?.nextElementSibling;

  if (dropdown && menu) {
    dropdown.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.dropdown-menu').forEach(m => {
        if (m !== menu) m.style.display = 'none';
      });

      menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.dropdown')) {
        menu.style.display = 'none';
      }
    });
  }

  // --- Slideshow ---

  let slideIndex = 1;

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  window.plusSlides = function(n) {
    showSlides(slideIndex += n);
  }

  window.currentSlide = function(n) {
    showSlides(slideIndex = n);
  }

  showSlides(slideIndex);
});

// Funktion att visa popup externt
function showPopup() {
  const popupOverlay = document.querySelector(".popup-overlay");
  if (popupOverlay) {
    popupOverlay.classList.add("active");
  }
}

// Funktion för bokningsmeddelande externt
function visaBokningsmeddelande() {
  const meddelande = document.getElementById("bokningsmeddelande");
  if (meddelande) {
    meddelande.textContent = "Tack! Vi återkommer inom kort med en bekräftelse.";
    meddelande.style.color = "#009739";
    meddelande.style.marginTop = "1rem";
  }
}
