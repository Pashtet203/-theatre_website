const firstimg = document.querySelector('.img-itemOne');
const secondimg = document.querySelector('.img-itemTwo');
const btnLeft = document.querySelector('.btn-itemLeft');
const btnRight = document.querySelector('.btn-itemRight');



btnRight.addEventListener('click', () => {
    if (firstimg.style.zIndex = 2) {
        secondimg.style.zIndex = 2;
        firstimg.style.zIndex = 1;
        firstimg.style.paddingTop = '10px';
        firstimg.style.paddingLeft = '15px';
        secondimg.style.paddingTop = '0px';
        secondimg.style.paddingLeft = '0px';

    }

})

btnLeft.addEventListener('click', () => {
    if (firstimg.style.zIndex = 1) {
        secondimg.style.zIndex = 1;
        firstimg.style.zIndex = 2;
        secondimg.style.paddingTop = '10px';
        secondimg.style.paddingLeft = '15px';
        firstimg.style.paddingTop = '0px';
        firstimg.style.paddingLeft = '0px';
    }
})

