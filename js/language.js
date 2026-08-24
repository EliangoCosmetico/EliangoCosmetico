const translations = {
  pt: {
    "nav-home": "Início",
    "nav-pricing": "Preços",
    "nav-contact": "Contatos",
    "call-us": "Ligue:",
    "contact-title": "Contate-nos",
    "contact-subtitle": "Eliango cosméticos",
    "contact-info-title": "Informações de contato",
    "contact-address": "Kifica, Benfica<br>Luanda, Angola",
    "become-member": "TORNE-SE UM MEMBRO",
    "summer-title": "AULAS DE ESTÉTICA GERAL ESTE VERÃO",
    "pay-now": "PAGUE AGORA E",
    "get": "GANHE",
    "discount": "35%",
    "off": "DE DESCONTO",
    "about-title": "Um Pouco Sobre Eliango Cosmético.",
    "courses": "Cursos",
    "course-1": "Estética Geral",
    "course-2": "Pedicure e Manicure",
    "course-3": "Cabeleireiro profissional",
    "course-4": "Auto-Maquilhagem",
    "course-5": "Maquiagem profissional",
    "course-6": "Barbearia Profissional",
    "rights": "Todos os direitos reservados.",
    "home-title": "Eliango Cosmético",
    "home-subtitle": "Salão de Beleza em Luanda",
    "pricing-title": "Nossos Preços",
    "pricing-subtitle": "Escolha o melhor para si"
  },
  en: {
    "nav-home": "Home",
    "nav-pricing": "Pricing",
    "nav-contact": "Contact",
    "call-us": "Call:",
    "contact-title": "Contact Us",
    "contact-subtitle": "Eliango Cosmetics",
    "contact-info-title": "Contact Information",
    "contact-address": "Kifica, Benfica<br>Luanda, Angola",
    "become-member": "BECOME A MEMBER",
    "summer-title": "GENERAL AESTHETICS CLASSES THIS SUMMER",
    "pay-now": "PAY NOW AND",
    "get": "GET",
    "discount": "35%",
    "off": "OFF",
    "about-title": "A Little About Eliango Cosmetics.",
    "courses": "Courses",
    "course-1": "General Aesthetics",
    "course-2": "Pedicure & Manicure",
    "course-3": "Professional Hairdresser",
    "course-4": "Self Makeup",
    "course-5": "Professional Makeup",
    "course-6": "Professional Barbering",
    "rights": "All rights reserved.",
    "home-title": "Eliango Cosmetics",
    "home-subtitle": "Beauty Salon in Luanda",
    "pricing-title": "Our Prices",
    "pricing-subtitle": "Choose the best for you"
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.remove("active"));
  const active = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
  if (active) active.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "pt";
  setLanguage(saved);
});
