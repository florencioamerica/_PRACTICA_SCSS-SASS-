
/* DOCUMENTACIÓN DE ESTE JAVASCRIPT

objetivos:

-Animación en el nav
-Animación de aparición derecha, izquierda o centro de elementos varios.


Requerimientos:

Requiere que en el HTML haya elementos con CLASE: izquierda, derecha o centro para que ejecute las animaciones.
Este javascript requiere de unas clases y animaciones que deben estar en el CSS vinculado al documento HTML en cuestión.
Este javascript también efectua una animación sobre el NAV el cual debe tener un id: navegador para que funcione
Desarrollado por la magnifica clase del curso de desarrollo web
*/





//cogemos todos los elementos que tengan clase izquierda y derecha
const izquierdas = document.getElementsByClassName("izquierda")
const derechas = document.getElementsByClassName("derecha")
const centros = document.getElementsByClassName("centro")

//cogemos el navegador para el efecto del nav
const navegador = document.getElementById("navegador")
const subNav01 = document.getElementById("subNav01")
const toggleLabel = document.getElementById("toggleLabel")




//listener de scroll para modificar el nav y ejecutar animaciones
window.onscroll=function(){

    if(navegador != null && toggleLabel != null){
        cambiarNav()
    }
        

    //Entro si el tamaño útil del navegador es mayor o igual a 800px   
    if(window.innerWidth>="800"){
        for(const item of izquierdas){
            animaciones(item, "izd")
        }
        for(const item of derechas){
            animaciones(item, "der")
        }        
    }
    for(const item of centros){
        animaciones(item, "cen")
    }
}

//función a la que sólo entraremos cuando esta sea llamada desde el evento
function cambiarNav(){
    
    //si el top del scroll del body es superior a 80 de posición, 
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navegador.style.backgroundColor = "rgba(44, 44, 44, 0.5)";
        subNav01.style.height="60px";
        toggleLabel.style.width="35px";
        toggleLabel.style.height="35px";
    }else{
        navegador.style.backgroundColor = "rgb(44, 44, 44)";
        subNav01.style.height="100px";
        toggleLabel.style.width="50px";
        toggleLabel.style.height="50px";      
    }
}

function animaciones(parametroRecibido01, parametroRecibido02){

    switch(parametroRecibido02){
        case "izd":
            if (estaEnlaPantalla(parametroRecibido01)==true) {
                // está en el viewport
                parametroRecibido01.classList.remove("desaparecerHaciaIzd")
                parametroRecibido01.classList.add("aparecerIzd")        
            }else{
                //no está en el viewport
                parametroRecibido01.classList.remove("aparecerIzd")
                parametroRecibido01.classList.add("desaparecerHaciaIzd")
            }
            break;
        case "der":
            if (estaEnlaPantalla(parametroRecibido01)==true) {
                // está en el viewport
                parametroRecibido01.classList.remove("desaparecerHaciaDer")
                parametroRecibido01.classList.add("aparecerDer")        
            }else{
                //no está en el viewport
                parametroRecibido01.classList.remove("aparecerDer")
                parametroRecibido01.classList.add("desaparecerHaciaDer")
            }
            break;
        case "cen":
            if (estaEnlaPantalla(parametroRecibido01)==true) {
                // está en el viewport
                parametroRecibido01.classList.remove("desaparecer")
                parametroRecibido01.classList.add("aparecer")        
            }else{
                //no está en el viewport
                parametroRecibido01.classList.remove("aparecer")
                parametroRecibido01.classList.add("desaparecer")
            }
            break;
        default:
            if (estaEnlaPantalla(parametroRecibido01)==true) {
                // está en el viewport
                parametroRecibido01.classList.remove("desaparecer")
                parametroRecibido01.classList.add("aparecer")        
            }else{
                //no está en el viewport
                parametroRecibido01.classList.remove("aparecer")
                parametroRecibido01.classList.add("desaparecer")
            }
            break;
    }        
}

function estaEnlaPantalla(parametroRecibido) {
    var distance = parametroRecibido.getBoundingClientRect();
    return (distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0);
}

