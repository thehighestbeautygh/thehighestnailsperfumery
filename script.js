// ==========================================
// THE HIGHEST NAILS & PERFUMERY
// FINAL WEBSITE JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // HERO QUOTES
    // ==========================

    const quotes = [
        "Luxury is remembered long after the service is complete.",
        "Confidence begins with beautiful self-care.",
        "Beauty is an experience, not just a service.",
        "Every appointment is a step towards elegance."
    ];

    const quoteElement = document.querySelector(".quote-box #quoteText");

    let currentQuote = 0;

    if (quoteElement) {
        quoteElement.textContent = quotes[currentQuote];

        setInterval(() => {
            currentQuote++;

            if (currentQuote >= quotes.length) {
                currentQuote = 0;
            }

            quoteElement.textContent = quotes[currentQuote];

        }, 5000);
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
    }

    function closeSideMenu() {
        if (sideMenu) sideMenu.classList.remove("active");
        if (overlay) overlay.classList.remove("active");
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


    // ==========================
    // HERO IMAGE SLIDER
    // ==========================

    const slides = document.querySelectorAll(".hero-slider .slide");
    const dots = document.querySelectorAll(".slider-dots .dot");

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

    function nextSlide() {

        if (!slides.length) return;

        slideIndex++;

        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        showSlide(slideIndex);
    }

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {
            slideIndex = index;
            showSlide(slideIndex);
        });

    });

    if (slides.length > 1) {
        setInterval(nextSlide, 4000);
    }


    // ==========================
    // SEARCH
    // ==========================

    const searchButton = document.querySelector(".search-btn");

    if (searchButton) {

        searchButton.addEventListener("click", () => {

            let searchOverlay = document.getElementById("siteSearch");

            // Create search box if it doesn't exist
            if (!searchOverlay) {

                searchOverlay = document.createElement("div");

                searchOverlay.id = "siteSearch";

                searchOverlay.innerHTML = `
                    <div class="search-panel">

                        <button class="search-close" id="searchClose">
                            ×
                        </button>

                        <h2>Search The Highest</h2>

                        <input
                            type="text"
                            id="siteSearchInput"
                            placeholder="Search nails, lashes, perfumes..."
                            autocomplete="off"
                        >

                        <div id="searchResults"></div>

                    </div>
                `;

                document.body.appendChild(searchOverlay);

                const searchClose =
                    document.getElementById("searchClose");

                const searchInput =
                    document.getElementById("siteSearchInput");

                const searchResults =
                    document.getElementById("searchResults");

                searchClose.addEventListener("click", () => {
                    searchOverlay.classList.remove("active");
                });

                searchOverlay.addEventListener("click", (event) => {

                    if (event.target === searchOverlay) {
                        searchOverlay.classList.remove("active");
                    }

                });

                searchInput.addEventListener("input", () => {

                    const searchTerm =
                        searchInput.value.toLowerCase().trim();

                    searchResults.innerHTML = "";

                    if (!searchTerm) {
                        return;
                    }

                    const searchableItems = [

                        {
                            name: "Nails",
                            description: "Explore our nail services.",
                            link: "nails.html"
                        },

                        {
                            name: "Lashes",
                            description: "Explore our lash services.",
                            link: "lashes.html"
                        },

                        {
                            name: "Perfumery",
                            description: "Explore our fragrances and perfumes.",
                            link: "perfumery.html"
                        },

                        {
                            name: "Home",
                            description: "Return to The Highest homepage.",
                            link: "#hero"
                        }

                    ];

                    const matches = searchableItems.filter(item =>
                        item.name.toLowerCase().includes(searchTerm) ||
                        item.description.toLowerCase().includes(searchTerm)
                    );

                    if (matches.length === 0) {

                        searchResults.innerHTML =
                            `<p class="no-results">No results found.</p>`;

                        return;
                    }

                    matches.forEach(item => {

                        const result = document.createElement("a");

                        result.href = item.link;
                        result.className = "search-result";

                        result.innerHTML = `
                            <strong>${item.name}</strong>
                            <span>${item.description}</span>
                        `;

                        searchResults.appendChild(result);

                    });

                });

            }

            searchOverlay.classList.add("active");

            const input =
                document.getElementById("siteSearchInput");

            if (input) {
                setTimeout(() => input.focus(), 100);
            }

        });

    }

});

