document.querySelector('.hamburger').addEventListener('click', function () {
    this.classList.toggle('open'); 
    document.querySelector('.mobile-menu').classList.toggle('open'); 
});