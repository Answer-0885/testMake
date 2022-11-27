const dropDownList = () =>{
    const input = document.querySelector('.drop-down-list__input');
    const hint = document.querySelector('.drop-down-list__hint');

 
    // При вводе текста у нас появляется подсказка Выберите что-нибудь
    input.addEventListener('input', (event)=> {
       if(event.target.value !== ""){
          hint.style.opacity = "1";
       } else{
          hint.style.opacity = "0";
       }
    });

};
export default dropDownList;