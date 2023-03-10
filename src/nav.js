(() => {
    const links = document.querySelectorAll(".nav__item");
    const nav = document.querySelector(".nav__list");

    links.forEach((link) =>
        link.addEventListener("click", () => setActive(link))
    );

    function setActive(link) {
        nav.querySelector(".active-link").classList.remove("active-link");
        link.classList.add("active-link");
    }
})();