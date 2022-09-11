// document.addEventListener('keydown', (event) => {
//     var keyValue = event.key;    

//     console.log("keydown event, keyValue: " + keyValue);    
   
// }, false);
   
function shake(especial){
    document.getElementById(especial).className = "shake";
}

function zoom(especial){
    document.getElementById(especial).className = "zoom";
}

let anim = document.getElementById("animation");

lottie.loadAnimation({
    wrapper: anim, // the dom element that will contain the animation
    animType: 'svg',
    loop: true,
    autoplay: true,
    path: '../json/inicio.json' // the path to the animation json
});

function wait(espera_segundos) {
    espera = espera_segundos * 1000
    const tiempo_inicio = Date.now();
    let tiempo_actual= null;
    do {
      tiempo_actual= Date.now();
    } while (tiempo_actual - tiempo_inicio < espera);
}