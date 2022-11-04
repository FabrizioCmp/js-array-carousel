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
imgSliderEl.src = imgs[0];


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
const imgActiveEl = document.querySelector(".imgActive");
let currentImg2 = 0;

// setting first img and opacity gallery imgs
imgActiveEl.src = imgs[0];
for( let i = 1; i < imgs.length; i++){
    document.querySelector(`.img${i}`).classList.add("opacity");

}

// btn_UP click
btnUPEl2.addEventListener("click", function(){
    
    //go to last img & reset opacity
    if(currentImg2 === 0){
        document.querySelector(`.img${currentImg2}`).classList.toggle("opacity");
        document.querySelector(`.img${currentImg2 +4}`).classList.toggle("opacity");
        currentImg2 = 5;
    }

    //show current img & change opacity
    currentImg2--;
    imgActiveEl.src = imgs[currentImg2];
    document.querySelector(`.img${currentImg2 +1}`).classList.toggle("opacity");
    document.querySelector(`.img${currentImg2}`).classList.toggle("opacity");

})


// btn_DOWN click
btnDownEl2.addEventListener("click", function(){

    // back to first img & reset opacity
    if(currentImg2 === 4){
        document.querySelector(`.img${currentImg2}`).classList.toggle("opacity");
        document.querySelector(`.img${currentImg2-4}`).classList.toggle("opacity");
        currentImg2 = -1;   
    }

    // show current img & change opacity
    currentImg2++;  
    imgActiveEl.src = imgs[currentImg2];
    document.querySelector(`.img${currentImg2 -1}`).classList.toggle("opacity");
    document.querySelector(`.img${currentImg2}`).classList.toggle("opacity");
})