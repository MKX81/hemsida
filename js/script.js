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

  document.addEventListener('click', (event) => {
      const isClickInsideMenu = nav.contains(event.target);
      const isClickOnToggle = toggle.contains(event.target);

      if (!isClickInsideMenu && !isClickOnToggle) {
        nav.classList.remove('active');
      }
    });

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


// --- Externa funktioner för popup ---
function showPopup() {
  const popupOverlay = document.querySelector(".popup-overlay");
  if (popupOverlay) {
    popupOverlay.classList.add("active");
  }
}
