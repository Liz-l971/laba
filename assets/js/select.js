function openSelect(id){

    const button = document.querySelectorAll(".make__order__select--button")[id];
    const buttonTextContent = button.textContent;

    const checkboxes = document.querySelectorAll(".custom-radio");


    document.querySelectorAll(".make__order__select--list")[id].classList.toggle("open");
    document.querySelectorAll(".make__order__select--button")[id].classList.toggle("open");

    const checkedValues = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);


    button.querySelector(".small-text").textContent = checkedValues.length > 0 ? checkedValues : buttonTextContent;
    
    if( document.querySelector(".make__order__inputs__content")){
        if(checkedValues=='Физическое лицо'){
            document.querySelector(".make__order__inputs__content").classList.add("fiz")
        }else{
            document.querySelector(".make__order__inputs__content").classList.remove("fiz")
        }
    }
}