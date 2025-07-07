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
const bgFixed = document.querySelector('.bg-fixed');

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  if (bgFixed) {
    bgFixed.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
});
