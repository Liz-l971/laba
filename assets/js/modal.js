function openModal(){
    document.querySelector('.sign-in__modal').classList.toggle('open');
    
    document.querySelector('.sign-in__modal__content').classList.toggle('open');
}

window.addEventListener('scroll', (e) => {
    if (document.querySelector('.sign-in__modal').classList.contains('open')) {
        window.scrollTo(0,0);
    } 

  });