export function initDrawer() {
    const drawer = document.querySelector(".js-drawer");
    const openMenu = document.querySelector(".js-open-menu");
    const closeMenu = document.querySelector(".js-close-menu");

    if (!drawer || !openMenu || !closeMenu) return;

    const closeWithAnimation = () => {
        drawer.classList.add("is-close-drawer");
        drawer.addEventListener("transitionend", () => {
            drawer.close();
            drawer.classList.remove("is-close-drawer");
            openMenu.setAttribute("aria-expanded", "false");
            openMenu.focus(); 
        }, { once: true });
    };

    openMenu.addEventListener("click", () => {
        if (!drawer.hasAttribute("open")) {
            openMenu.setAttribute("aria-expanded", "true");
            drawer.showModal();
        }
    });

    closeMenu.addEventListener("click", closeWithAnimation);

    drawer.addEventListener("click", (e) => {
        if (e.target === drawer) closeWithAnimation();
    });

    drawer.addEventListener("cancel", (event) => {
        event.preventDefault();
        closeWithAnimation();
    });
}