let scrollX = 0;
let scrollY = 0;

function openModal(){
    document.querySelector('.sign-in__modal').classList.toggle('open');
    scrollX= window.pageXOffset;
    scrollY= window.pageYOffset;
    document.querySelector('.sign-in__modal__content').classList.toggle('open');
}

function openBurger(){
    document.querySelector('.dark-background').classList.toggle('open');
    scrollX= window.pageXOffset;
    scrollY= window.pageYOffset;
    document.querySelector('.burger-menu__wrap').classList.toggle('open');
}

window.addEventListener('scroll', (e) => {

    if (document.querySelector('.sign-in__modal').classList.contains('open')) {

        window.scrollTo(scrollX,scrollY);
    } 

  });

