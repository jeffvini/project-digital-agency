export function initDrawer() {
    const drawer = document.querySelector(".js-drawer");
    const openMenu = document.querySelector(".js-open-menu");
    const closeMenu = document.querySelector(".js-close-menu");

    if (!drawer || !openMenu || !closeMenu) return;

    openMenu.addEventListener("click", () => {
        if (!drawer.hasAttribute("open")) {
            drawer.showModal();
            drawer.classList.remove("is-close-drawer");
            openMenu.setAttribute("aria-expanded", "true");
        }
    });

    closeMenu.addEventListener("click", () => {

    });

    drawer.addEventListener("click", (e) => {
        if (e.target === drawer) {

        }
    });
}