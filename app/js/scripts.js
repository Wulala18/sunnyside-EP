const navMenu = document.getElementById("nav-menu")
const navBtn = document.getElementById("nav-toggle")

navBtn.addEventListener('click', () =>
{

    navMenu.classList.toggle('active');

});