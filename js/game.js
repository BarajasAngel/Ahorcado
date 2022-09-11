
const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");

window.onload = function(){
    console.log("hola " + id)
    switch(parseInt(id)){
        case 0:            
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        default:
            location.replace('../404.html');
            break;
    }
}