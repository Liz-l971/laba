function openSelect(){

    const button = document.querySelector(".make__order__select--button");

    const checkboxes = document.querySelectorAll(".custom-radio");


    document.querySelector(".make__order__select--list").classList.toggle("open");
    document.querySelector(".make__order__select--button").classList.toggle("open");

    const checkedValues = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);


    button.querySelector(".small-text").textContent = checkedValues.length > 0 ? checkedValues : 'Покупатель';
}