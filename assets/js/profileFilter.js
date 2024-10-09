function clickMenuItem(id){
    let content =document.querySelectorAll(".profile__main__content__form-filter__block-form");
    let buttons =document.querySelectorAll(".profile__main__content__form-filter__block-navigate-button");

    content[id].classList.add('active');
    buttons[id].classList.add('active');

    content.forEach((elem,key)=>{
            if(key!=id){
                elem.classList.remove('active')
            }
    });

    buttons.forEach((elem,key)=>{
        if(key!=id){
            elem.classList.remove('active')
        }
});

}