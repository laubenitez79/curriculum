//funcion que que selecciona y aplica el estilo en el menu y quita la previamente seleccionado
function seleccionar(link){
    var opciones = document.querySelector('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    link.className = "seleccionado"


    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}
// funcion para el menú
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive"
    }else{
        x.className = "";
    }
}

//Detecto el scrolling para aplicar la animacioón de las barras de habilidades

window.onscroll = function(){
    efectoHabilidades()
};

//función que aplica la animación de la barra de habilidades

function efectoHabilidades(){
    var skills =  document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if(distancia_skills >= 325){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("poo").classList.add("barra-progreso2");
        document.getElementById("java").classList.add("barra-progreso3");
        document.getElementById("js").classList.add("barra-progreso4");
        document.getElementById("bd").classList.add("barra-progreso5");

    }
}
