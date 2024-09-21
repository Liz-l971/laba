const sliderContainer =document.querySelector(".slider__cards__content");
const sliderCard = document.querySelector(".slider__card ")

function nextSlide(){

    let sliderContainerLeft = Number(document.querySelector(".slider__cards__content").offsetLeft);
    if((Math.abs(sliderContainerLeft))< (Number(sliderContainer.offsetWidth)-(Number(sliderCard.offsetWidth)*3))){
        let left = sliderContainerLeft-Number((sliderCard.offsetWidth)*2);
        sliderContainer.style.left=left+"px";
    }

}

function prevSlide(){

    let sliderContainerLeft = Number(document.querySelector(".slider__cards__content").offsetLeft);
    if(sliderContainerLeft>0){
        let left = sliderContainerLeft+Number((sliderCard.offsetWidth)*2);
        sliderContainer.style.left=left+"px";
    }else{
        sliderContainer.style.left=0+"px";
    }

}