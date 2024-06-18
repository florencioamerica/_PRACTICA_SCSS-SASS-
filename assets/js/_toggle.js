/* Evento para cuando hay selección de contenido en el nav (movil) para plegar el menú */
const contenido = document.getElementsByClassName("contenido");
const toggle = document.querySelector('input[name=toggle]');

for(const item of contenido){
    item.addEventListener("click", function(){
        if(toggle){
            toggle.checked=false;
        }
    });
}
