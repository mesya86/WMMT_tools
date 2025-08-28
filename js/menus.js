document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuContainer = document.getElementById('menu'); // ← idを'menu'に変更

    menuToggle.addEventListener('click', () => {
        menuContainer.classList.toggle('show');
        menuToggle.classList.toggle('active');
    });
});