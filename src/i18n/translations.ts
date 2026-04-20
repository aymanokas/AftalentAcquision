export type Lang = "en" | "fr";

export const translations = {
  nav: {
    services: { en: "Services", fr: "Services" },
    howItWorks: { en: "How It Works", fr: "Comment ça marche" },
    whyUs: { en: "Why Us", fr: "Pourquoi nous" },
    testimonials: { en: "Testimonials", fr: "Témoignages" },
    contact: { en: "Contact", fr: "Contact" },
    getStarted: { en: "Get Started", fr: "Commencer" },
  },
  hero: {
    headline: {
      en: "Hire Top Talent Faster",
      fr: "Recrutez les meilleurs talents plus rapidement",
    },
    subheadline: {
      en: "We connect ambitious companies with exceptional professionals through data-driven recruitment, rigorous vetting, and a global talent network.",
      fr: "Nous connectons les entreprises ambitieuses avec des professionnels exceptionnels grâce à un recrutement basé sur les données, une sélection rigoureuse et un réseau mondial de talents.",
    },
    cta: { en: "Get Started", fr: "Commencer" },
    ctaSecondary: { en: "Learn More", fr: "En savoir plus" },
    badge: { en: "Trusted by 500+ companies worldwide", fr: "Plus de 500 entreprises nous font confiance" },
  },
  services: {
    title: { en: "Our Services", fr: "Nos Services" },
    subtitle: {
      en: "End-to-end recruitment solutions tailored to your needs",
      fr: "Des solutions de recrutement de bout en bout adaptées à vos besoins",
    },
    items: [
      {
        title: { en: "Talent Sourcing", fr: "Recherche de talents" },
        description: {
          en: "We leverage AI-powered tools and our vast network to identify the best candidates across industries and geographies.",
          fr: "Nous utilisons des outils alimentés par l'IA et notre vaste réseau pour identifier les meilleurs candidats dans tous les secteurs et régions.",
        },
      },
      {
        title: { en: "Screening & Vetting", fr: "Sélection et vérification" },
        description: {
          en: "Rigorous multi-step screening ensures only top-tier professionals make it to your shortlist, saving you time and resources.",
          fr: "Une sélection rigoureuse en plusieurs étapes garantit que seuls les professionnels de premier plan figurent sur votre liste restreinte.",
        },
      },
      {
        title: { en: "Executive Search", fr: "Recherche de cadres" },
        description: {
          en: "Discreet, high-touch search for C-suite and senior leadership positions. We find leaders who drive transformation.",
          fr: "Recherche discrète et personnalisée pour les postes de direction et de cadres supérieurs. Nous trouvons des leaders qui transforment.",
        },
      },
      {
        title: { en: "Employer Branding", fr: "Marque employeur" },
        description: {
          en: "Build a compelling employer brand that attracts top talent organically and positions your company as an employer of choice.",
          fr: "Construisez une marque employeur convaincante qui attire naturellement les meilleurs talents et positionne votre entreprise comme employeur de choix.",
        },
      },
    ],
  },
  steps: {
    title: { en: "How It Works", fr: "Comment ça marche" },
    subtitle: {
      en: "A streamlined process designed for speed and precision",
      fr: "Un processus optimisé conçu pour la rapidité et la précision",
    },
    items: [
      {
        title: { en: "Discovery Call", fr: "Appel découverte" },
        description: {
          en: "We learn about your company culture, role requirements, and hiring goals to build a tailored strategy.",
          fr: "Nous découvrons votre culture d'entreprise, les exigences du poste et vos objectifs de recrutement pour élaborer une stratégie sur mesure.",
        },
      },
      {
        title: { en: "Talent Mapping", fr: "Cartographie des talents" },
        description: {
          en: "Our team identifies and maps qualified candidates using AI tools and our global professional network.",
          fr: "Notre équipe identifie et cartographie les candidats qualifiés à l'aide d'outils IA et de notre réseau professionnel mondial.",
        },
      },
      {
        title: { en: "Shortlist & Interview", fr: "Présélection et entretien" },
        description: {
          en: "We present a curated shortlist of pre-vetted candidates ready for interviews, complete with detailed profiles.",
          fr: "Nous présentons une liste restreinte de candidats pré-sélectionnés prêts pour les entretiens, avec des profils détaillés.",
        },
      },
      {
        title: { en: "Hire & Onboard", fr: "Embauche et intégration" },
        description: {
          en: "We support you through offer negotiation and onboarding to ensure a seamless transition for your new hire.",
          fr: "Nous vous accompagnons dans la négociation de l'offre et l'intégration pour assurer une transition fluide de votre nouvelle recrue.",
        },
      },
    ],
  },
  whyUs: {
    title: { en: "Why Choose Us", fr: "Pourquoi nous choisir" },
    subtitle: {
      en: "What sets us apart from the competition",
      fr: "Ce qui nous distingue de la concurrence",
    },
    items: [
      {
        title: { en: "Lightning Speed", fr: "Rapidité éclair" },
        description: {
          en: "Average time-to-hire of 21 days. Our streamlined process gets you qualified candidates faster than traditional agencies.",
          fr: "Délai moyen d'embauche de 21 jours. Notre processus optimisé vous donne accès aux candidats qualifiés plus rapidement.",
        },
      },
      {
        title: { en: "Unmatched Quality", fr: "Qualité inégalée" },
        description: {
          en: "98% client satisfaction rate. Every candidate goes through our rigorous 5-step vetting process before reaching you.",
          fr: "Taux de satisfaction client de 98 %. Chaque candidat passe par notre processus rigoureux de sélection en 5 étapes.",
        },
      },
      {
        title: { en: "Global Network", fr: "Réseau mondial" },
        description: {
          en: "Access to 50,000+ professionals across 40+ countries. Find the perfect match regardless of location or timezone.",
          fr: "Accès à plus de 50 000 professionnels dans plus de 40 pays. Trouvez le candidat idéal quelle que soit la localisation.",
        },
      },
      {
        title: { en: "Deep Expertise", fr: "Expertise approfondie" },
        description: {
          en: "15+ years of experience across tech, finance, healthcare, and more. Industry-specific knowledge that makes a difference.",
          fr: "Plus de 15 ans d'expérience dans la tech, la finance, la santé et plus encore. Une connaissance sectorielle qui fait la différence.",
        },
      },
    ],
  },
  testimonials: {
    title: { en: "What Our Clients Say", fr: "Ce que disent nos clients" },
    subtitle: {
      en: "Trusted by industry-leading companies worldwide",
      fr: "Des entreprises de premier plan nous font confiance dans le monde entier",
    },
    items: [
      {
        quote: {
          en: "They transformed our hiring process. We went from 60-day cycles to under 3 weeks, and the quality of candidates has never been better.",
          fr: "Ils ont transformé notre processus de recrutement. Nous sommes passés de cycles de 60 jours à moins de 3 semaines, et la qualité des candidats n'a jamais été aussi élevée.",
        },
        name: "Sarah Chen",
        role: { en: "VP of People, TechNova", fr: "VP RH, TechNova" },
      },
      {
        quote: {
          en: "Their executive search team found us a CTO who has completely revolutionized our engineering culture. Worth every penny.",
          fr: "Leur équipe de recherche de cadres nous a trouvé un CTO qui a complètement révolutionné notre culture d'ingénierie. Chaque centime en valait la peine.",
        },
        name: "Marcus Williams",
        role: { en: "CEO, FinBridge", fr: "PDG, FinBridge" },
      },
      {
        quote: {
          en: "The global reach is incredible. They helped us build an entire remote engineering team across three continents in just two months.",
          fr: "La portée mondiale est incroyable. Ils nous ont aidés à constituer une équipe d'ingénieurs à distance sur trois continents en seulement deux mois.",
        },
        name: "Amélie Dubois",
        role: { en: "Head of Talent, GlobalHealth", fr: "Directrice des talents, GlobalHealth" },
      },
    ],
  },
  cta: {
    title: {
      en: "Ready to Build Your Dream Team?",
      fr: "Prêt à constituer votre équipe de rêve ?",
    },
    subtitle: {
      en: "Book a free consultation and discover how we can accelerate your hiring process.",
      fr: "Réservez une consultation gratuite et découvrez comment nous pouvons accélérer votre processus de recrutement.",
    },
    button: { en: "Book a Call", fr: "Réserver un appel" },
    buttonSecondary: { en: "View Case Studies", fr: "Voir les études de cas" },
  },
  footer: {
    description: {
      en: "Connecting exceptional talent with ambitious companies worldwide.",
      fr: "Connecter des talents exceptionnels avec des entreprises ambitieuses dans le monde entier.",
    },
    company: { en: "Company", fr: "Entreprise" },
    about: { en: "About Us", fr: "À propos" },
    careers: { en: "Careers", fr: "Carrières" },
    blog: { en: "Blog", fr: "Blog" },
    press: { en: "Press", fr: "Presse" },
    servicesTitle: { en: "Services", fr: "Services" },
    talentSourcing: { en: "Talent Sourcing", fr: "Recherche de talents" },
    executiveSearch: { en: "Executive Search", fr: "Recherche de cadres" },
    employerBranding: { en: "Employer Branding", fr: "Marque employeur" },
    screening: { en: "Screening & Vetting", fr: "Sélection et vérification" },
    legal: { en: "Legal", fr: "Légal" },
    privacy: { en: "Privacy Policy", fr: "Politique de confidentialité" },
    terms: { en: "Terms of Service", fr: "Conditions d'utilisation" },
    cookies: { en: "Cookie Policy", fr: "Politique de cookies" },
    rights: {
      en: "All rights reserved.",
      fr: "Tous droits réservés.",
    },
  },
} as const;
