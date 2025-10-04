document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuContainer = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menuContainer.classList.toggle('show');
        menuToggle.classList.toggle('active');
    });
});