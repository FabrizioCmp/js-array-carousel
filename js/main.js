// declaration array of imgs
const imgs = [
    "imgs/01.webp",
    "imgs/02.webp",
    "imgs/03.webp",
    "imgs/04.webp",
    "imgs/05.webp"
];

/*********************** SLIDER BASE ***********************/
// declaration variables-constants
const btnUPEl = document.querySelector(".btn_up");
const btnDownEl = document.querySelector(".btn_down");
const imgSliderEl = document.querySelector(".img_slider");
let currentImg = 1;

// setting first img
imgSliderEl.src = "imgs/01.webp";


// btn_UP click
btnUPEl.addEventListener("click", function () {
    // if last img, back to start
    if (currentImg === (imgs.length)) {
        currentImg = 0;
    }

    // increase counter-imgs & show next img
    currentImg++;
    imgSliderEl.src = imgs[currentImg - 1];
})


// btn_DOWN click
btnDownEl.addEventListener("click", function () {
    // if first img, skip to last
    if(currentImg === 1){
        currentImg = 6;
    }

    // decrease counter-imgs & show previous img
    currentImg--;
    imgSliderEl.src = imgs[currentImg - 1];
})



/*********************** SLIDER BONUS ***********************/
// declaration variables-constants
const btnUPEl2= document.querySelector(".btn_up2");
const btnDownEl2= document.querySelector(".btn_down2");
const imgContainerEl = document.querySelector(".imgs_container");
let currentImg2 = 1;

