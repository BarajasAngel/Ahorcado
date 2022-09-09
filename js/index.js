// document.addEventListener('keydown', (event) => {
//     var keyValue = event.key;    

//     console.log("keydown event, keyValue: " + keyValue);    
   
// }, false);
   
let anim = document.getElementById("animation");

lottie.loadAnimation({
    wrapper: anim, // the dom element that will contain the animation
    animType: 'svg',
    loop: true,
    autoplay: true,
    path: '../json/inicio.json' // the path to the animation json
});