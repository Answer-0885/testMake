const buttonBlock = () => {
 const button = document.querySelector('.button-block__button');

//  При нажатии на кнопкуу сначала применяется линейный градиент, и через 1 секунду она становится не активной
 button.addEventListener('click', ()=> {
    button.style.background = 'linear-gradient(206.57deg, #DD80ED 0%, #3D28E3 83.33%';
    const buttonClick = () => {
        button.setAttribute('disabled', true)
        button.style.background = '#CBCBCC';
    };

    setTimeout(buttonClick, 1000);
    });

}
export default buttonBlock;