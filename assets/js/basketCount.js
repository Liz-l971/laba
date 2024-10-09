function basketPlus(id){
    let formCounts = document.querySelectorAll('.counts__buttons')[id];
    let basketCountText = formCounts.querySelector('.basket-count-text');
    basketCountText.textContent = Number(basketCountText.textContent)+1
}


function basketMinus(id){
    let formCounts = document.querySelectorAll('.counts__buttons')[id];
    let basketCountText = formCounts.querySelector('.basket-count-text');
    if(Number(basketCountText.textContent)>0){
        basketCountText.textContent = Number(basketCountText.textContent)-1;

    }
}