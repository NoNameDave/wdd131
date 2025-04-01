document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu Toggle
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");
    
    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("show");
        menuButton.classList.toggle("close");
    });

    // Dynamic Footer Year
    document.getElementById("copyright-year").textContent = new Date().getFullYear();
    
    // Last Modified Date
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
});