// ==========================
// THE HIGHEST — MAIN SCRIPT
// ==========================


// ==========================
// FIX HERO STRUCTURE
// ==========================

const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");
const quoteBox = document.querySelector(".quote-box");
const heroSlider = document.querySelector(".hero-slider");
const sliderDots = document.querySelector(".slider-dots");

if (hero && heroContent && quoteBox && heroSlider) {
    hero.appendChild(heroContent);
    hero.appendChild(quoteBox);
    hero.appendChild(heroSlider);

    if (sliderDots) {
        hero.appendChild(sliderDots);
    }
}


// ==========================
// HERO QUOTES
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const quotes = [
        "Beauty should feel like you.",
        "A little time for yourself goes a long way.",
        "Good nails. Good lashes. Good scents.",
        "Simple details can change the whole look.",
        "Come as you are. Leave feeling good."
    ];

    const quoteText = document.getElementById("quoteText");

    if (quoteText) {

        let quoteIndex = 0;

        quoteText.textContent = quotes[quoteIndex];

        setInterval(() => {

            quoteIndex = (quoteIndex + 1) % quotes.length;

            quoteText.textContent = quotes[quoteIndex];

        }, 5000);
    }

});


// ==========================
// SIDE MENU
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.getElementById("menuButton");
    const sideMenu = document.getElementById("sideMenu");
    const closeMenu = document.getElementById("closeMenu");
    const overlay = document.getElementById("overlay");

    function openMenu() {

        if (sideMenu) {
            sideMenu.classList.add("active");
        }

        if (overlay) {
            overlay.classList.add("active");
        }

    }

    function closeSideMenu() {

        if (sideMenu) {
            sideMenu.classList.remove("active");
        }

        if (overlay) {
            overlay.classList.remove("active");
        }

    }

    if (menuButton) {
        menuButton.addEventListener("click", openMenu);
    }

    if (closeMenu) {
        closeMenu.addEventListener("click", closeSideMenu);
    }

    if (overlay) {
        overlay.addEventListener("click", closeSideMenu);
    }

    if (sideMenu) {

        const menuLinks = sideMenu.querySelectorAll("a");

        menuLinks.forEach(link => {

            link.addEventListener("click", closeSideMenu);

        });

    }

});
// ==========================
// HERO IMAGE SLIDER
// ==========================

const slides = document.querySelectorAll(".hero-slider .slide");

const heroCategory = document.getElementById("heroCategory");
const heroDetail = document.getElementById("heroDetail");

const heroContent = [
    {
        category: "Nails",
        detail: "Acrylic · Gel polish · Stick-ons"
    },
    {
        category: "Lashes",
        detail: "Extensions · Strip lashes · Clusters"
    },
    {
        category: "Perfumery",
        detail: "Feminine · Masculine · Unisex"
    }
];

let slideIndex = 0;

function showSlide(index) {

    if (!slides.length) return;

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });

    if (heroCategory && heroContent[index]) {
        heroCategory.textContent = heroContent[index].category;
    }

    if (heroDetail && heroContent[index]) {
        heroDetail.textContent = heroContent[index].detail;
    }
}

function nextSlide() {

    slideIndex = (slideIndex + 1) % slides.length;

    showSlide(slideIndex);
}

showSlide(0);

if (slides.length > 1) {
    setInterval(nextSlide, 3000);
}
// ==========================
// SEARCH FUNCTIONALITY
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const searchButton = document.getElementById("searchButton");
    const searchOverlay = document.getElementById("searchOverlay");
    const searchClose = document.getElementById("searchClose");
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    if (!searchButton || !searchOverlay) return;

    const pages = [
        {
            name: "Home",
            url: "index.html",
            keywords: "home highest nails perfumery"
        },
        {
            name: "Nails",
            url: "nails.html",
            keywords: "nails acrylic gel stick ons"
        },
        {
            name: "Lashes",
            url: "lashes.html",
            keywords: "lashes extensions strips clusters"
        },
        {
            name: "Perfumery",
            url: "perfumery.html",
            keywords: "perfume scents fragrance feminine masculine unisex"
        },
        {
            name: "Reviews",
            url: "reviews.html",
            keywords: "reviews clients feedback"
        },
        {
            name: "Process",
            url: "process.html",
            keywords: "process booking aftercare"
        },
        {
            name: "About",
            url: "about.html",
            keywords: "about story highest"
        },
        {
            name: "Visit",
            url: "visit.html",
            keywords: "visit location contact address"
        },
        {
            name: "Need a Website",
            url: "website.html",
            keywords: "website developer design"
        }
    ];

    function openSearch() {
        searchOverlay.classList.add("active");

        setTimeout(() => {
            if (searchInput) {
                searchInput.focus();
            }
        }, 100);
    }

    function closeSearch() {
        searchOverlay.classList.remove("active");

        if (searchInput) {
            searchInput.value = "";
        }

        if (searchResults) {
            searchResults.innerHTML = "";
        }
    }

    function performSearch() {

        if (!searchInput || !searchResults) return;

        const query = searchInput.value.trim().toLowerCase();

        searchResults.innerHTML = "";

        if (!query) return;

        const matches = pages.filter(page =>
            `${page.name} ${page.keywords}`
                .toLowerCase()
                .includes(query)
        );

        if (!matches.length) {

            searchResults.innerHTML = `
                <p class="search-no-results">
                    No results found.
                </p>
            `;

            return;
        }

        matches.forEach(page => {

            const link = document.createElement("a");

            link.href = page.url;
            link.textContent = page.name;
            link.className = "search-result-link";

            searchResults.appendChild(link);

        });
    }

    searchButton.addEventListener("click", openSearch);

    if (searchClose) {
        searchClose.addEventListener("click", closeSearch);
    }

    searchOverlay.addEventListener("click", event => {

        if (event.target === searchOverlay) {
            closeSearch();
        }

    });

    if (searchInput) {
        searchInput.addEventListener("input", performSearch);
    }

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeSearch();
        }

    });

});

