const accordeon = ()=> {

   const plus = document.querySelectorAll('.accord__svg');
   const content = document.querySelectorAll('.accord__element-content');
   const accordTitle = document.querySelectorAll('.accord__title');
   const accordElement = document.querySelectorAll('.accord__element');
   const svg = document.querySelectorAll('.accord__svg');


   // Добавляем необходимые классы при клике на элементы аккордеона. Секции раскрываются плавно.
   accordElement.forEach((btn, i) => {
        btn.addEventListener('click', () => {       
           plus[i].classList.toggle('open-list');
           content[i].classList.toggle('open-text');
           accordTitle[i].classList.toggle('head-color');
           svg[i].classList.toggle('transform');
           accordElement[i].classList.toggle('bottom-border');
        });
     });
}
export default accordeon;