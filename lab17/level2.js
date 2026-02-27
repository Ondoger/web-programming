document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuList = document.getElementById('menu-list');

    menuToggle.addEventListener('click', () => {
        menuList.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});
