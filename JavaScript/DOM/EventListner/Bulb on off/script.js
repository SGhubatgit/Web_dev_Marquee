let bulb = document.querySelector('#bulb');

let on = document.querySelector('#on');
let off = document.querySelector('#off');

on.addEventListener('click', () => {
    bulb.style.backgroundColor = "yellow";
});

off.addEventListener('click', () => {
    bulb.style.backgroundColor = "white";
});