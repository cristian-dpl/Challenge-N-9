// punto 6
function presentar  (){
    const ocultar = document.getElementsByClassName('btn')
    const [ btn0 ] = ocultar;
    btn0.style.visibility = "hidden";



    // punto 1
    
    const personaje = prompt("¿Quien se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
    console.log(`Elegiste a ${personaje}`);
    
    // puento 2
    
    const span = document.querySelector("span");
    const lower = personaje.toLowerCase();
    
    switch (lower) {
        case "mario":
            console.log(span.innerHTML = "Mario");
            break;
        case "luigi":
            console.log(span.innerHTML = "Luigi");
            break;
        case "bowser":
            console.log(span.innerHTML = "Bowser Morton Koopa");
            break;
        case "peach":
            console.log(span.innerHTML = "Princesa Peach Toadstool");
            break;
        case "yoshi":
            console.log(span.innerHTML = "T. Yoshisaur Munchakoopas");
            break;
        case "toad":
            console.log(span.innerHTML = "Toad");
            break;
        case "toadette":
            console.log(span.innerHTML = "Toadette");
            break;
        case "daisy":
            console.log(span.innerHTML = "Princesa Daisy");
            break   
        default:
            console.log(span.innerHTML = "(Desconocido)")
            break;
    
    }

    
    
    // punto 3        
    if (lower === "mario" || "luigi" || "bowser" || "peach" || "yoshi" || "toad" || "toadette" || "daisy") {
        console.log(`Id a buscar: ${lower}`);
        let theId = document.getElementById(lower);
        theId.setAttribute("title", "Presentado")
    };
}

// punto 4
// Hecho

// punto 5
// boton creado y con estilos







