const burger = () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerMenuClose = document.querySelector('.burger-menu__close');
    const burgerMenuOpen = document.querySelector('.header-block__ico-menu');
    const body = document.querySelector('body');

    // открываем меню
    burgerMenuOpen.addEventListener('click', () => {
       burgerMenu.style.display='block';
        body.classList.add('overlay');
    });
    // Закрываем меню
    burgerMenuClose.addEventListener('click', () => {
        burgerMenu.style.display='none';
        body.classList.remove('overlay');
    });

};
export default burger;