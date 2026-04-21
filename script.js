// Handle the mobile navigation toggle for smaller screens.
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// Add the current year automatically in the footer.
const yearElement = document.querySelector("#current-year");
const languageToggle = document.querySelector("#language-toggle");
const titleElement = document.querySelector("title");

const translations = {
    it: {
        pageTitle: "Giorgio Di Pietro | Portfolio Diplomato in Informatica",
        toggleLabel: "EN",
        toggleAriaLabel: "Passa alla versione in inglese",
        "meta-description": "Portfolio personale di Giorgio Di Pietro, diplomato in Informatica, con competenze, progetti e contatti.",
        "menu-toggle-label": "Apri il menu di navigazione",
        "nav-aria-label": "Navigazione principale",
        brand: "Giorgio Di Pietro",
        "nav-home": "Inizio",
        "nav-about": "Chi Sono",
        "nav-skills": "Competenze",
        "nav-projects": "Progetti",
        "nav-contact": "Contatti",
        "hero-eyebrow": "Diplomato in Informatica",
        "hero-title": "Costruisco competenze digitali con progetti pratici e apprendimento continuo.",
        "hero-text": "Ciao, sono Giorgio, diplomato in Informatica. Mi sto concentrando su sviluppo web, programmazione e database, mettendo in pratica cio che imparo attraverso progetti concreti.",
        "hero-projects-button": "Vedi Progetti",
        "hero-contact-button": "Contattami",
        "hero-card-aria-label": "Panoramica rapida del profilo",
        "hero-badge": "Disponibile per stage",
        "hero-card-title": "Panoramica Rapida",
        "hero-highlight-1": "Attenzione alle basi del front-end e al codice pulito",
        "hero-highlight-2": "Approfondisco la programmazione con C, Java e Python",
        "hero-highlight-3": "Interesse per database, sviluppo software e lavoro in team",
        "about-eyebrow": "Chi Sono",
        "about-title": "Motivato, concreto e pronto a crescere nel settore IT.",
        "about-paragraph-1": "Sono un diplomato in Informatica con interesse per lo sviluppo software e le tecnologie web. Durante il mio percorso di studi ho acquisito basi solide di programmazione, database e reti.",
        "about-paragraph-2": "Mi piace trasformare idee in soluzioni semplici e funzionali, migliorando costantemente le mie competenze tecniche. Attualmente sono alla ricerca di opportunita per crescere professionalmente nel settore IT e in contesti affini.",
        "skills-eyebrow": "Competenze",
        "skills-title": "Tecnologie che studio e utilizzo.",
        "skill-html": "Strutturo pagine web semantiche, chiare e accessibili.",
        "skill-css": "Realizzo layout responsive con attenzione a spaziature, ordine visivo e design moderno.",
        "skill-javascript": "Aggiungo interattivita e logiche dinamiche di base con JavaScript vanilla.",
        "skill-sql": "Lavoro con query, tabelle e concetti fondamentali di gestione dei dati.",
        "skill-c": "Esercito la logica di programmazione e la comprensione dei concetti piu vicini al basso livello.",
        "skill-java": "Approfondisco la programmazione a oggetti e la struttura delle applicazioni.",
        "skill-python": "Sviluppo script e soluzioni leggibili per esercizi, automazione e problem solving.",
        "projects-eyebrow": "Progetti",
        "projects-title": "Alcuni progetti rappresentativi del mio percorso.",
        "project-tag-web": "Sviluppo Web",
        "project-title-web": "Mini Sito Web",
        "project-description-web": "Un semplice progetto web realizzato per esercitarmi con HTML, CSS e JavaScript, con un'interfaccia chiara, moderna e responsive.",
        "project-tag-programming": "Programmazione",
        "project-title-programming": "Programma Base Gestionale",
        "project-description-programming": "Un programma base sviluppato per gestire dati e operazioni essenziali, utile per allenare logica, input/output e organizzazione del codice.",
        "project-tag-database": "Database",
        "project-title-database": "Database Studenti e Corsi",
        "project-description-database": "Un progetto database dedicato alla gestione di studenti e corsi, con tabelle relazionali e query SQL per inserimento, aggiornamento e consultazione dei dati.",
        "contact-eyebrow": "Contatti",
        "contact-title": "Restiamo in contatto.",
        "contact-text": "Sono aperto a opportunita di stage, collaborazioni e ruoli junior nel settore IT.",
        "footer-rights": "Giorgio Di Pietro. Tutti i diritti riservati.",
        "footer-top-link": "Torna su"
    },
    en: {
        pageTitle: "Giorgio Di Pietro | Junior IT Graduate Portfolio",
        toggleLabel: "IT",
        toggleAriaLabel: "Switch to the Italian version",
        "meta-description": "Personal portfolio of Giorgio Di Pietro, an IT graduate showcasing skills, projects, and contact information.",
        "menu-toggle-label": "Open navigation menu",
        "nav-aria-label": "Primary navigation",
        brand: "Giorgio Di Pietro",
        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "hero-eyebrow": "IT Graduate",
        "hero-title": "Building digital skills through practical projects and continuous learning.",
        "hero-text": "Hi, I'm Giorgio, an IT graduate. I'm focusing on web development, programming, and databases by applying what I learn through hands-on projects.",
        "hero-projects-button": "View Projects",
        "hero-contact-button": "Contact Me",
        "hero-card-aria-label": "Quick profile overview",
        "hero-badge": "Open to internships",
        "hero-card-title": "Quick Overview",
        "hero-highlight-1": "Focused on front-end fundamentals and clean code",
        "hero-highlight-2": "Strengthening programming skills with C, Java, and Python",
        "hero-highlight-3": "Interested in databases, software development, and teamwork",
        "about-eyebrow": "About Me",
        "about-title": "Motivated, practical, and ready to grow in IT.",
        "about-paragraph-1": "I am an IT graduate with a strong interest in software development and web technologies. During my studies, I built solid foundations in programming, databases, and networking.",
        "about-paragraph-2": "I enjoy turning ideas into simple, functional solutions while continuously improving my technical skills. I am currently looking for opportunities to grow professionally in the IT field and related environments.",
        "skills-eyebrow": "Skills",
        "skills-title": "Technologies I study and use.",
        "skill-html": "I structure clear, semantic, and accessible web pages.",
        "skill-css": "I create responsive layouts with attention to spacing, visual order, and modern design.",
        "skill-javascript": "I add interactivity and basic dynamic logic with vanilla JavaScript.",
        "skill-sql": "I work with queries, tables, and core data management concepts.",
        "skill-c": "I practice programming logic and strengthen my understanding of lower-level concepts.",
        "skill-java": "I am developing object-oriented programming skills and structured application design.",
        "skill-python": "I build readable scripts and solutions for exercises, automation, and problem solving.",
        "projects-eyebrow": "Projects",
        "projects-title": "A few representative projects from my learning path.",
        "project-tag-web": "Web Development",
        "project-title-web": "Mini Website",
        "project-description-web": "A simple web project created to practice HTML, CSS, and JavaScript with a clear, modern, and responsive interface.",
        "project-tag-programming": "Programming",
        "project-title-programming": "Basic Management Program",
        "project-description-programming": "A basic program developed to manage data and essential operations, useful for strengthening logic, input/output, and code organization.",
        "project-tag-database": "Database",
        "project-title-database": "Students and Courses Database",
        "project-description-database": "A database project focused on managing students and courses, using relational tables and SQL queries for inserting, updating, and reviewing data.",
        "contact-eyebrow": "Contact",
        "contact-title": "Let's stay in touch.",
        "contact-text": "I am open to internship opportunities, collaborations, and junior roles in the IT sector.",
        "footer-rights": "Giorgio Di Pietro. All rights reserved.",
        "footer-top-link": "Back to top"
    }
};

let currentLanguage = "it";

const applyLanguage = (language) => {
    const selectedLanguage = translations[language];

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const translationKey = element.dataset.i18n;

        if (selectedLanguage[translationKey]) {
            element.textContent = selectedLanguage[translationKey];
        }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
        const translationKey = element.dataset.i18nAriaLabel;

        if (selectedLanguage[translationKey]) {
            element.setAttribute("aria-label", selectedLanguage[translationKey]);
        }
    });

    document.querySelectorAll("[data-i18n-content]").forEach((element) => {
        const translationKey = element.dataset.i18nContent;

        if (selectedLanguage[translationKey]) {
            element.setAttribute("content", selectedLanguage[translationKey]);
        }
    });

    if (titleElement) {
        titleElement.textContent = selectedLanguage.pageTitle;
    }

    if (languageToggle) {
        languageToggle.textContent = selectedLanguage.toggleLabel;
        languageToggle.setAttribute("aria-label", selectedLanguage.toggleAriaLabel);
    }
};

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

if (languageToggle) {
    languageToggle.addEventListener("click", (event) => {
        event.preventDefault();
        currentLanguage = currentLanguage === "it" ? "en" : "it";
        applyLanguage(currentLanguage);
    });
}

applyLanguage(currentLanguage);

// Reveal sections softly as they enter the viewport.
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.2
    }
);

revealElements.forEach((element) => revealObserver.observe(element));
