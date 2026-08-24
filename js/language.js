const translations = {
  pt: {
    // Menu
    "nav-home": "Início",
    "nav-pricing": "Preços",
    "nav-contact": "Contatos",
    "nav-language": "Idioma",

    // Contact page
    "contact-title": "Contate-nos",
    "contact-subtitle": "Eliango cosméticos",
    "contact-info-title": "Informações de contato",
    "contact-address": "Kifica, Benfica<br>Luanda, Angola",
    "contact-phone": "938 720 335",
    "contact-email": "elizabethraimundo2002@gmail.com",

    // Common
    "call-us": "Ligue:",
    "become-member": "TORNE-SE UM MEMBRO",
    "summer-classes": "AULAS DE ESTÉTICA GERAL ESTE VERÃO",
    "pay-now": "PAGUE AGORA E",
    "get-discount": "GANHE",
    "discount": "35%",
    "discount-text": "DE DESCONTO",
    "about-title": "Um Pouco Sobre Eliango Cosmético.",
    "courses": "Cursos",
    "course-1": "Estética Geral",
    "course-2": "Pedicure e Manicure",
    "course-3": "Cabeleireiro profissional",
    "course-4": "Auto-Maquilhagem",
    "course-5": "Maquiagem profissional",
    "course-6": "Barbearia Profissional",
    "rights": "Todos os direitos reservados."
  },
  en: {
    // Menu
    "nav-home": "Home",
    "nav-pricing": "Pricing",
    "nav-contact": "Contact",
    "nav-language": "Language",

    // Contact page
    "contact-title": "Contact Us",
    "contact-subtitle": "Eliango Cosmetics",
    "contact-info-title": "Contact Information",
    "contact-address": "Kifica, Benfica<br>Luanda, Angola",
    "contact-phone": "938 720 335",
    "contact-email": "elizabethraimundo2002@gmail.com",

    // Common
    "call-us": "Call:",
    "become-member": "BECOME A MEMBER",
    "summer-classes": "GENERAL AESTHETICS CLASSES THIS SUMMER",
    "pay-now": "PAY NOW AND",
    "get-discount": "GET",
    "discount": "35%",
    "discount-text": "OFF",
    "about-title": "A Little About Eliango Cosmetics.",
    "courses": "Courses",
    "course-1": "General Aesthetics",
    "course-2": "Pedicure and Manicure",
    "course-3": "Professional Hairdresser",
    "course-4": "Self Makeup",
    "course-5": "Professional Makeup",
    "course-6": "Professional Barbering",
    "rights": "All rights reserved."
  }
};

function setLanguage(lang) {
  // Save preference
  localStorage.setItem("lang", lang);

  // Update all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update language buttons state
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
  if (activeBtn) activeBtn.classList.add("active");
}

// Load saved language or default to Portuguese
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "pt";
  setLanguage(savedLang);
});
