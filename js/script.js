function visaBokningsmeddelande() {
  const meddelande = document.getElementById("bokningsmeddelande");
  meddelande.textContent = "Tack! Vi återkommer inom kort med en bekräftelse.";
  meddelande.style.color = "#009739";
  meddelande.style.marginTop = "1rem";
}

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  document.body.style.backgroundPosition = `center calc(50% + ${scrollY * 0.5}px)`;
});
