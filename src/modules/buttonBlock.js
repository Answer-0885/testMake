const buttonBlock = () => {
 const button = document.querySelector('.button-block__button');

 button.addEventListener('click', ()=> {
    button.style.background = 'linear-gradient(206.57deg, #DD80ED 0%, #3D28E3 83.33%';
    const buttonClick = () => {
        button.setAttribute('disabled', true)
        button.style.background = '#CBCBCC';
    }

    setTimeout(buttonClick, 1000)
    })

}
export default buttonBlock