const translations = {
  pt: {
    "nav-home": "Início",
    "nav-pricing": "Preços",
    "nav-contact": "Contatos",
    "call-us": "Ligue:",
    "home-welcome": "Seja bem-vindo ao seu universo de beleza",
    "home-by": "Por <a href=\"https://www.instagram.com/elizabethraimundooficial/\" target=\"_blank\">Elizabeth Raimundo.</a>",
    "watch-video": "Assista ao nosso vídeo.",
    "service-1-title": "Maquiagem e Estética",
    "service-1-desc": "LIMPEZA FACIAL MASSAGEM GESSOTERAPIA E EPILAÇÃO",
    "service-2-title": "Manicure e Pedicure",
    "service-2-desc": "GELINHO UNHAS DE GEL",
    "service-3-title": "Serviços de Cabeleireiro",
    "service-3-desc": "TODO TIPO DE TRANÇA E OUTROS SERVIÇOS",
    "specialists": "Especialistas.",
    "create-shine": "Criamos o teu Brilho.",
    "spec-1": "Especialista em Estética Geral.",
    "spec-2": "Especialista em pedicure e manicure.",
    "spec-3": "Especialista em cabeleireiro.",
    "pricing-title": "Preços",
    "pricing-subtitle": "Eliango Cosmético",
    "pricing-heading": "PLANO DE PREÇOS DO CURSO",
    "plan-starter": "Iniciante",
    "plan-basic": "Básico",
    "plan-pro": "Pro",
    "plan-best": "Melhor oferta",
    "plan-unlimited": "Ilimitado",
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
    "rights": "Todos os direitos reservados."
  },
  en: {
    "nav-home": "Home",
    "nav-pricing": "Pricing",
    "nav-contact": "Contact",
    "call-us": "Call:",
    "home-welcome": "Welcome to your universe of beauty",
    "home-by": "By <a href=\"https://www.instagram.com/elizabethraimundooficial/\" target=\"_blank\">Elizabeth Raimundo.</a>",
    "watch-video": "Watch our video.",
    "service-1-title": "Makeup & Aesthetics",
    "service-1-desc": "FACIAL CLEANSING, MASSAGE, PLASTER THERAPY & HAIR REMOVAL",
    "service-2-title": "Manicure & Pedicure",
    "service-2-desc": "GEL POLISH & GEL NAILS",
    "service-3-title": "Hairdressing Services",
    "service-3-desc": "ALL TYPES OF BRAIDS AND OTHER SERVICES",
    "specialists": "Specialists.",
    "create-shine": "We create your shine.",
    "spec-1": "General Aesthetics Specialist.",
    "spec-2": "Pedicure and Manicure Specialist.",
    "spec-3": "Hairdressing Specialist.",
    "pricing-title": "Pricing",
    "pricing-subtitle": "Eliango Cosmetics",
    "pricing-heading": "COURSE PRICING PLAN",
    "plan-starter": "Starter",
    "plan-basic": "Basic",
    "plan-pro": "Pro",
    "plan-best": "Best offer",
    "plan-unlimited": "Unlimited",
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
    "rights": "All rights reserved."
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
