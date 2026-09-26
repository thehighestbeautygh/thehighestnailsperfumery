// ==========================
// THE HIGHEST V2
// FINAL JAVASCRIPT
// ==========================


// ==========================
// QUOTES
// ==========================

const quotes = [
    "Luxury is remembered long after the service is complete.",
    "Confidence begins with beautiful self-care.",
    "Beauty is an experience, not just a service.",
    "Every appointment is a step towards elegance."
];

let currentQuote = 0;

const quoteElements = document.querySelectorAll("#quoteText");

function changeQuote() {

    currentQuote++;

    if (currentQuote >= quotes.length) {
        currentQuote = 0;
    }

    quoteElements.forEach(element => {
        element.textContent = quotes[currentQuote];
    });
}

if (quoteElements.length) {

    quoteElements.forEach(element => {
        element.textContent = quotes[currentQuote];
    });

    setInterval(changeQuote, 5000);
}


// ==========================
// SIDE MENU
// ==========================

const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");

function openMenu() {
    if (sideMenu) sideMenu.classList.add("active");
    if (overlay) overlay.classList.add("active");
    document.body.classList.add("menu-open");
}

function closeSideMenu() {
    if (sideMenu) sideMenu.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
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


// Close menu when a menu link is clicked

document.querySelectorAll(".side-menu a").forEach(link => {
    link.addEventListener("click", closeSideMenu);
});


// ==========================
// HERO IMAGE SLIDER
// ==========================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let slideIndex = 0;

function showSlide(index) {

    if (!slides.length) return;

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");

    if (dots[index]) {
        dots[index].classList.add("active");
    }
}

function changeSlide() {

    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    showSlide(slideIndex);
}

if (slides.length > 1) {
    setInterval(changeSlide, 4000);
}


// ==========================
// CLICKABLE SLIDER DOTS
// ==========================

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        slideIndex = index;

        showSlide(slideIndex);

    });

});


// ==========================
// SEARCH
// ==========================

const searchButton = document.querySelector(".search-btn");

const searchableItems = [
    {
        name: "Nails",
        description: "Explore our nail services.",
        link: "nails.html"
    },
    {
        name: "Lashes",
        description: "Explore our lash collection.",
        link: "lashes.html"
    },
    {
        name: "Perfumery",
        description: "Explore our fragrance collection.",
        link: "perfumery.html"
    },
    {
        name: "Reviews",
        description: "See what our clients say.",
        link: "#reviews"
    },
    {
        name: "Our Process",
        description: "Learn how we create your beauty experience.",
        link: "#process"
    },
    {
        name: "About Us",
        description: "Learn more about The Highest.",
        link: "#about"
    },
    {
        name: "Visit Us",
        description: "Find our location and business details.",
        link: "#visit"
    },
    {
        name: "Contact",
        description: "Get in touch with us.",
        link: "#contact"
    }
];


function createSearchBox() {

    if (document.querySelector(".search-overlay")) return;


    const searchOverlay = document.createElement("div");

    searchOverlay.className = "search-overlay";

    searchOverlay.innerHTML = `

        <div class="search-box">

            <button class="search-close" aria-label="Close search">
                ×
            </button>

            <span class="search-label">
                SEARCH THE HIGHEST
            </span>

            <h2>What are you looking for?</h2>

            <input
                type="text"
                class="site-search-input"
                placeholder="Search nails, lashes, perfume..."
                autocomplete="off"
            >

            <div class="search-results"></div>

        </div>

    `;

    document.body.appendChild(searchOverlay);


    const input =
        searchOverlay.querySelector(".site-search-input");

    const results =
        searchOverlay.querySelector(".search-results");

    const close =
        searchOverlay.querySelector(".search-close");


    function closeSearch() {
        searchOverlay.classList.remove("active");
        input.value = "";
        results.innerHTML = "";
    }


    close.addEventListener("click", closeSearch);


    searchOverlay.addEventListener("click", event => {

        if (event.target === searchOverlay) {
            closeSearch();
        }

    });


    input.addEventListener("input", () => {

        const searchTerm =
            input.value.trim().toLowerCase();

        results.innerHTML = "";


        if (!searchTerm) return;


        const matches = searchableItems.filter(item =>
            item.name.toLowerCase().includes(searchTerm)
        );


        if (!matches.length) {

            results.innerHTML = `
                <p class="no-results">
                    No results found.
                </p>
            `;

            return;
        }


        matches.forEach(item => {

            const result = document.createElement("a");

            result.className = "search-result";

            result.href = item.link;

            result.innerHTML = `
                <strong>${item.name}</strong>
                <span>${item.description}</span>
            `;


            result.addEventListener("click", () => {
                closeSearch();
            });


            results.appendChild(result);

        });

    });


    searchOverlay.classList.add("active");

    setTimeout(() => input.focus(), 100);
}


if (searchButton) {

    searchButton.addEventListener("click", createSearchBox);

}

