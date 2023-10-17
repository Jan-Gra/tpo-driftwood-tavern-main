const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const asunto = document.getElementById("asunto")
const mensaje = document.getElementById("mensaje")
const form = documen.getElementById("form")
const listinputs = document.querySelectorAll("#input")

form.addEventListener("submit") , (e) => {   
    e.preventDefault();

    if(nombre.value.length < 1 || nombre.value.trim()=="" ){  
        console.error("error");
    };

    if(correo.value.length < 1 || correo.value.trim()=="" ){  
        console.error("error");
    };

    if(asunto.value.length < 1 || asunto.value.trim()=="" ){  
        console.error("error");
    };

    if(mensaje.value.length < 1 || mensaje.value.trim()=="" ){  
        console.error("error");
    };

};