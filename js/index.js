document.addEventListener('keydown', (event) => {
    var keyValue = event.key;    

    console.log("keydown event, keyValue: " + keyValue);    
   
}, false);
   
let anim = document.getElementById("animation");

lottie.loadAnimation({
    wrapper: anim, // the dom element that will contain the animation
    animType: 'svg',
    loop: false,
    autoplay: true,
    path: '../json/man.json' // the path to the animation json
});

let anim2 = document.getElementById("animation2");

lottie.loadAnimation({
    wrapper: anim2, // the dom element that will contain the animation
    animType: 'svg',
    loop: false,
    autoplay: true,
    path: '../json/women.json' // the path to the animation json
});
let anim3 = document.getElementById("animation3");

lottie.loadAnimation({
    wrapper: anim3, // the dom element that will contain the animation
    animType: 'svg',
    loop: false,
    autoplay: true,
    path: '../json/boy.json' // the path to the animation json
});
let anim4 = document.getElementById("animation4");

lottie.loadAnimation({
    wrapper: anim4, // the dom element that will contain the animation
    animType: 'svg',
    loop: false,
    autoplay: true,
    path: '../json/cowgirl.json' // the path to the animation json
});
let anim5 = document.getElementById("animation5");

lottie.loadAnimation({
    wrapper: anim5, // the dom element that will contain the animation
    animType: 'svg',
    loop: false,
    autoplay: true,
    path: '../json/pinky.json' // the path to the animation json
});
let anim6 = document.getElementById("animation6");

lottie.loadAnimation({
    wrapper: anim6, // the dom element that will contain the animation
    animType: 'svg',
    loop: false,
    autoplay: true,
    path: '../json/mouse.json' // the path to the animation json
});