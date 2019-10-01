let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;
let carrusel = document.getElementById("carrusel");
let texto = document.getElementById("texto");
let end = document.getElementById("piePagina");

boton.addEventListener("click", function() {
    if (contador == 0) {
        enlaces.className = ('enlaces dos');
        if (carrusel !== null) {
            carrusel.style.display = "none";
        }
        if (texto !== null) {
            texto.style.display = "none";
        }
        end.style.display = "none";
        contador++;
    } else {
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        if (carrusel !== null) {
            carrusel.style.display = "block";
        }
        if (texto !== null) {
            texto.style.display = "block";
        }
        end.style.display = "block";
        contador = 0;
    }
})

window.addEventListener('resize', function() {
    if (screen.width > 750) {
        if (carrusel !== null) {
            carrusel.style.display = "flex";
        }
        if (texto !== null) {
            texto.style.display = "flex";
        }


        end.style.display = "flex";
        contador = 0;
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno col-xs-12 col-sm-8 col-md-8 col-lg-8');

    }
})