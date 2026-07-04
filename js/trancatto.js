const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menu?.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();

const contactForm = document.querySelector("#contact-form");
contactForm?.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const message = [
    "Olá, quero conhecer as linhas da Trançatto.",
    "",
    `Nome: ${data.get("nome")}`,
    `E-mail: ${data.get("email")}`,
    `Telefone: ${data.get("telefone")}`
  ].join("\n");
  window.open(`https://wa.me/5517997579903?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

const revealItems = document.querySelectorAll(".product, .section-head, .palette-title, .swatches, .feature-copy");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
revealItems.forEach(item => observer.observe(item));
