//01 RECOGER EN CONSTANTES LOS ELEMENTOS: IMAGEN PRINCIPAL Y LOS DOS BOTONES DE IZD Y DER
const img = document.getElementById('img');
const botonDer = document.getElementById('botonDer');
const botonIzd = document.getElementById('botonIzd');

//02 ESCUCHAR LOS CLICKS DEL BOTÓN DER (QUE ESTÁ EN CONSTANTE)
botonDer.addEventListener('click', function(){
    //CUANDO HAYA UN CLICK EN EL BOTÓN DER CAMBIO EL SRC DE LA CONSTANTE DE LA IMAGEN PRINCIPAL HACIA UNA MÁS  
    
    let posicionActual //declaro variable local    
    posicionActual = img.getAttribute('posicion') //recojo el atributo posición (su valor) en la variable    
    posicionActual = Number(posicionActual) //lo paso a número para poder operar 


    let posicionSiguiente //declaro la variable para el siguiente en orden 


    if(posicionActual==5){ //si l posición actual es la 5, que es la última, pues la siguiente que sea la 1
        posicionSiguiente = 1
        img.src=`./assets/img/img${posicionSiguiente}.jpg` //cambiamos el SRC de la imagen
        img.setAttribute('posicion', posicionSiguiente) //cambiamos el atributo posición de la imagen
    }else{ //mientras no sea la 5, pondré siempre la siguiente en posición
        posicionSiguiente = posicionActual + 1
        img.src=`./assets/img/img${posicionSiguiente}.jpg`
        img.setAttribute('posicion', posicionSiguiente)
    }

    crearAutomatismo(5000)
})

//02 ESCUCHAR LOS CLICKS DEL BOTÓN IZD (QUE ESTÁ EN CONSTANTE)
botonIzd.addEventListener('click', function(){

    let posicionActual //declaro variable local  
    posicionActual = img.getAttribute('posicion')
    posicionActual = Number(posicionActual)

    let posicionSiguiente 

    if(posicionActual==1){ 
        posicionSiguiente = 5
        img.src=`./assets/img/img${posicionSiguiente}.jpg` 
        img.setAttribute('posicion', posicionSiguiente) 
    }else{
        posicionSiguiente = posicionActual - 1
        img.src=`./assets/img/img${posicionSiguiente}.jpg`
        img.setAttribute('posicion', posicionSiguiente)
    }

    crearAutomatismo(5000)
})


/* CREAMOS EL AUTOMATISMO PARA QUE SE EJECUTEN DE FORMA AUTOMÁTICA CADA 5 SEGUNDOS */
let intervalo
let tiempo = 3000
crearAutomatismo(tiempo)
console.log("línea 58")


function crearAutomatismo(t){
    
    if(intervalo != undefined){
        clearInterval(intervalo)
    }

    intervalo = window.setInterval(function(){
        let numAleatorio;
        numAleatorio = Number(numAleatorio); /* Pasamos a tipo número */
        numAleatorio = Math.random()*5; /* obtenemos un número entre 1 y 5 (incluyendo decimales) */
        numAleatorio = Math.ceil(numAleatorio) /* redondeamos a número entero el resultado */
        
        img.src=`./assets/img/img${numAleatorio}.jpg`
        img.setAttribute('posicion', numAleatorio)
    }, t)
}



