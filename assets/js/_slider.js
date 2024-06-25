//01 RECOGER EN CONSTANTES LOS ELEMENTOS: IMAGEN PRINCIPAL Y LOS DOS BOTONES DE IZD Y DER
const img = document.getElementById('img');
const botonDer = document.getElementById('botonDer');
const botonIzd = document.getElementById('botonIzd');
const h1 = document.getElementById('h1');
const tranformacion = [
    { 
        opacity: "0"
    },
    { 
        opacity: "1"
    },
];  
const tranformacion2 = [
    { 
        opacity: "0"
    },
    { 
        opacity: "1"
    },
];      
const duracion = {
    duration: 500,
    iterations: 1,
};
const duracion2 = {
    duration: 1000,
    iterations: 1,
};
var tiempoIteracion = 3000
var numFotosMaximas = 6


//02 ESCUCHAR LOS CLICKS DEL BOTÓN DER (QUE ESTÁ EN CONSTANTE)
botonDer.addEventListener('click', function(){
    //CUANDO HAYA UN CLICK EN EL BOTÓN DER CAMBIO EL SRC DE LA CONSTANTE DE LA IMAGEN PRINCIPAL HACIA UNA MÁS  
    
    let posicionActual //declaro variable local    
    posicionActual = img.getAttribute('posicion') //recojo el atributo posición (su valor) en la variable    
    posicionActual = Number(posicionActual) //lo paso a número para poder operar 


    let posicionSiguiente //declaro la variable para el siguiente en orden 


    if(posicionActual==numFotosMaximas){ //si l posición actual es la 5, que es la última, pues la siguiente que sea la 1
        posicionSiguiente = 1        
    }else{ //mientras no sea la 5, pondré siempre la siguiente en posición
        posicionSiguiente = posicionActual + 1
    }

    img.src=`./assets/img/img${posicionSiguiente}.jpg` //cambiamos el SRC de la imagen
    img.setAttribute('posicion', posicionSiguiente) //cambiamos el atributo posición de la imagen
    img.animate(tranformacion, duracion)
    h1.animate(tranformacion2, duracion2)

    cambiarh1(posicionSiguiente)
    crearAutomatismo(tiempoIteracion)
})

//02 ESCUCHAR LOS CLICKS DEL BOTÓN IZD (QUE ESTÁ EN CONSTANTE)
botonIzd.addEventListener('click', function(){

    let posicionActual //declaro variable local  
    posicionActual = img.getAttribute('posicion')
    posicionActual = Number(posicionActual)

    let posicionSiguiente 

    if(posicionActual==1){ 
        posicionSiguiente = numFotosMaximas
    }else{
        posicionSiguiente = posicionActual - 1
    }

    img.src=`./assets/img/img${posicionSiguiente}.jpg`
    img.setAttribute('posicion', posicionSiguiente)
    img.animate(tranformacion, duracion)
    h1.animate(tranformacion2, duracion2)

       
    cambiarh1(posicionSiguiente)
    
    crearAutomatismo(tiempoIteracion)
})

/* CREAMOS EL AUTOMATISMO PARA QUE SE EJECUTEN DE FORMA AUTOMÁTICA CADA 5 SEGUNDOS */
let intervalo
crearAutomatismo(tiempoIteracion)


function crearAutomatismo(t){
    
    if(intervalo != undefined){
        clearInterval(intervalo)
    }

    intervalo = window.setInterval(function(){
        let posicionSiguiente;
        posicionSiguiente = Number(posicionSiguiente); //Pasamos a tipo número
        posicionSiguiente = Math.random()*numFotosMaximas; //obtenemos un número decimal entre 0,1 y 4,9(incluyendo decimales)        
        posicionSiguiente = Math.ceil(posicionSiguiente) //redondeamos AL ALZA a número entero el resultado        
        img.src=`./assets/img/img${posicionSiguiente}.jpg`
        img.setAttribute('posicion', posicionSiguiente)
        img.animate(tranformacion, duracion)
        h1.animate(tranformacion2, duracion2)

        cambiarh1(posicionSiguiente)
        
    }, t)
}
function cambiarh1(z){
    switch (z){
        case 1:
            h1.innerText="Nuestras reuniones"
            break;
        case 2:
            h1.innerText="Nuestras oficinas"
            break;
        case 3:
            h1.innerText="Trabajo remoto"
            break;
        case 4:
            h1.innerText="reuniones"
            break;
        case 5:
            h1.innerText="Personal cualificado"
            break;
        case 6:
            h1.innerText="Nuestra historia"
            break;
        default:
            h1.innerText="Encabezado de la foto por defecto"
            break;
    }
}

