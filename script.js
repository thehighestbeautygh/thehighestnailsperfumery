document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MENU
       ===================================================== */

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

    if (menuButton) menuButton.addEventListener("click", openMenu);
    if (closeMenu) closeMenu.addEventListener("click", closeSideMenu);
    if (overlay) overlay.addEventListener("click", closeSideMenu);


    /* =====================================================
       HERO SLIDER
       ===================================================== */

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

        const dots = document.querySelectorAll(".slider-dots .dot");

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    showSlide(0);

    if (slides.length > 1) {
        setInterval(nextSlide, 3000);
    }


    /* =====================================================
       SEARCH
       ===================================================== */

    const searchButton = document.querySelector(".search-btn");
    const searchOverlay = document.getElementById("siteSearch");
    const searchClose = document.getElementById("searchClose");
    const searchInput = document.getElementById("siteSearchInput");
    const searchResults = document.getElementById("searchResults");

    let savedSearchScrollY = 0;

    function lockSearchScroll() {
        savedSearchScrollY = window.scrollY;

        document.body.style.position = "fixed";
        document.body.style.top = `-${savedSearchScrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";
    }

    function unlockSearchScroll() {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";

        window.scrollTo(0, savedSearchScrollY);
    }

    function closeSearch() {
        if (!searchOverlay) return;

        searchOverlay.classList.remove("active");
        searchOverlay.setAttribute("aria-hidden", "true");

        if (searchResults) {
            searchResults.innerHTML = "";
            searchResults.classList.remove("has-results");
        }

        if (searchInput) {
            searchInput.value = "";
        }

        unlockSearchScroll();
    }

    function openSearch() {
        if (!searchOverlay || !searchInput) return;

        lockSearchScroll();

        searchOverlay.classList.add("active");
        searchOverlay.setAttribute("aria-hidden", "false");

        setTimeout(() => {
            searchInput.focus();
        }, 100);
    }

    if (searchButton) {
        searchButton.addEventListener("click", openSearch);
    }

    if (searchClose) {
        searchClose.addEventListener("click", closeSearch);
    }

    if (searchOverlay) {
        searchOverlay.addEventListener("click", (event) => {
            if (event.target === searchOverlay) {
                closeSearch();
            }
        });
    }

    if (searchInput && searchResults) {

        searchInput.addEventListener("input", () => {

            const searchTerm = searchInput.value
                .toLowerCase()
                .trim();

            searchResults.innerHTML = "";
            searchResults.classList.remove("has-results");

            /*
             * Keep the search overlay clean.
             * Nothing appears until the user actually types.
             */
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
                    name: "Reviews",
                    description: "Read client experiences.",
                    link: "reviews.html"
                },
                {
                    name: "Our Process",
                    description: "Booking, service and aftercare.",
                    link: "process.html"
                },
                {
                    name: "About Us",
                    description: "The story behind The Highest.",
                    link: "about.html"
                },
                {
                    name: "Visit Us",
                    description: "Location and contact details.",
                    link: "visit.html"
                }
            ];

            const matches = searchableItems.filter(item =>
                item.name.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm)
            );

            if (!matches.length) {

                searchResults.innerHTML = `
                    <p class="no-results">No results found.</p>
                `;

                searchResults.classList.add("has-results");

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

            searchResults.classList.add("has-results");
        });
    }


    /* =====================================================
       ESCAPE KEY
       ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            searchOverlay &&
            searchOverlay.classList.contains("active")
        ) {
            closeSearch();
        }

    });

});

