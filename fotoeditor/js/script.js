let inputs = document.querySelectorAll('.controls>input');

let inputUrl = document.querySelector('#input-url');
let imageUrl = document.querySelector('#image-url');
var size = document.getElementById('img');
let frameHeight = getComputedStyle(size).height;
var from = 0;
let dem = document.querySelector('.demotivation');
let demText = document.querySelector('#input-text');





function propertyUpdate() {


    if (this.name == "base") {
        document.getElementById("img").style.setProperty(`--${this.name}`, this.value + " ");

    } else {
        document.getElementById("img").style.setProperty(`--${this.name}`, this.value + "px");

    }
    MathD();

}

function updateImageUrl() {
    console.log("1");
    let url = inputUrl.value;
    imageUrl.setAttribute('src', url);
    console.log("2");

}

function updateText() {
    console.log("1");
    let text = demText.value;
    dem.innerHTML = text;

    console.log(text);

}

function MathD() {
    size = document.getElementById('img');
    frameHeight = getComputedStyle(size).height;

    var to = frameHeight.search('px');

    size = frameHeight.substring(from, to);

    // 
    udemotivationSwitch();



}

function udemotivationSwitch() {


    if (size >= 620) {
        console.log(size + "!!!");
        dem.classList.remove("hide")

    } else { dem.classList.add("hide") }




}









inputUrl.addEventListener('change', updateImageUrl);
demText.addEventListener('change', updateText);

inputs.forEach(input => input.addEventListener('change', propertyUpdate));
inputs.forEach(input => input.addEventListener('mousemove', propertyUpdate));