// ==========================
// THE HIGHEST
// MAIN SCRIPT
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // SIDE MENU
    // ==========================

    const menuButton = document.getElementById("menuButton");
    const closeMenu = document.getElementById("closeMenu");
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    let savedScrollY = 0;

    function openMenu() {

        if (!sideMenu || !overlay || !menuButton) return;

        savedScrollY = window.scrollY;

        sideMenu.classList.add("active");
        overlay.classList.add("active");

        menuButton.setAttribute("aria-expanded", "true");

        document.body.classList.add("menu-open");

        document.body.style.position = "fixed";
        document.body.style.top = `-${savedScrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";
    }

    function closeMenuPanel() {

        if (!sideMenu || !overlay || !menuButton) return;

        sideMenu.classList.remove("active");
        overlay.classList.remove("active");

        menuButton.setAttribute("aria-expanded", "false");

        document.body.classList.remove("menu-open");

        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";

        window.scrollTo(0, savedScrollY);
    }

    if (menuButton) {
        menuButton.addEventListener("click", openMenu);
    }

    if (closeMenu) {
        closeMenu.addEventListener("click", closeMenuPanel);
    }

    if (overlay) {
        overlay.addEventListener("click", closeMenuPanel);
    }

    if (sideMenu) {

        sideMenu.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                closeMenuPanel();
            });

        });

    }


    // ==========================
    // SEARCH
    // ==========================

    const searchButton = document.getElementById("searchButton");
    const searchOverlay = document.getElementById("siteSearch");
    const searchClose = document.getElementById("searchClose");
    const searchInput = document.getElementById("siteSearchInput");
    const searchResults = document.querySelectorAll(".search-result");

    function openSearch() {

        if (!searchOverlay || !searchInput) return;

        searchOverlay.classList.add("active");
        searchOverlay.setAttribute("aria-hidden", "false");

        setTimeout(function () {
            searchInput.focus();
        }, 100);
    }

    function closeSearch() {

        if (!searchOverlay || !searchInput) return;

        searchOverlay.classList.remove("active");
        searchOverlay.setAttribute("aria-hidden", "true");

        searchInput.value = "";

        searchResults.forEach(function (result) {
            result.style.display = "flex";
        });
    }

    if (searchButton) {
        searchButton.addEventListener("click", openSearch);
    }

    if (searchClose) {
        searchClose.addEventListener("click", closeSearch);
    }

    if (searchOverlay) {

        searchOverlay.addEventListener("click", function (event) {

            if (event.target === searchOverlay) {
                closeSearch();
            }

        });

    }

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const query = searchInput.value
                .toLowerCase()
                .trim();

            searchResults.forEach(function (result) {

                const searchableText =
                    result.dataset.search
                        ? result.dataset.search.toLowerCase()
                        : result.textContent.toLowerCase();

                if (!query || searchableText.includes(query)) {
                    result.style.display = "flex";
                } else {
                    result.style.display = "none";
                }

            });

        });

    }


    // ==========================
    // HERO SLIDER
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

        slides.forEach(function (slide, i) {

            slide.classList.toggle(
                "active",
                i === index
            );

        });

        if (heroCategory && heroContent[index]) {

            heroCategory.textContent =
                heroContent[index].category;

        }

        if (heroDetail && heroContent[index]) {

            heroDetail.textContent =
                heroContent[index].detail;

        }

    }

    function nextSlide() {

        slideIndex =
            (slideIndex + 1) % slides.length;

        showSlide(slideIndex);

    }

    showSlide(0);

    if (slides.length > 1) {

        setInterval(nextSlide, 3000);

    }


    // ==========================
    // ESCAPE KEY
    // ==========================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closeMenuPanel();
            closeSearch();

        }

    });

});

