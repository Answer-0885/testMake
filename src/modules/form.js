
const form = () => {
   const input = document.querySelector('.UI__input');
   const hint = document.querySelector('.UI__hint');
   const error = document.querySelector('.UI__error');

   // При вводе текста у нас появляется подсказка E-mail
   input.addEventListener('input', (event)=> {
      if(event.target.value !== ""){
         hint.style.opacity = "1";
      } else{
         hint.style.opacity = "0";
         error.style.opacity = '0';
      }
   });

   // При событии change обработчик проверяет введённый e-mail на присутствие @
   input.addEventListener('change', (event)=> {
      event.preventDefault();
   
    if (!input.value.includes('@') && !input.value == '') {
      input.classList.add('UI__input_error'); 
      hint.classList.add('UI__hint_error'); 
      error.classList.add('UI__hint_error'); 
      error.style.opacity = '1';
    } else if(input.value.includes('@') || input.value == '') {
      input.classList.remove('UI__input_error'); 
      hint.classList.remove('UI__hint_error'); 
      error.classList.remove('UI__hint_error'); 
      error.style.opacity = '0';
    }

   }
);

};
export default form;