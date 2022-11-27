const menu = () => {
    const menu = document.querySelector('.menu');

    menu.addEventListener('click', (e) => {
 
       const eTarget = e.target.closest('a[href*="#"]');

          // Плавно перемещаемся к выбранному блоку из списка меню
        if (eTarget && menu.contains(e.target)) {
          e.preventDefault();
          const block = e.target.getAttribute('href');
          document.querySelector(block).scrollIntoView({
             behavior: 'smooth',
             block: 'start'
          });
       } 
    });
 };
 export default menu;