var width = 432;

function moverDerecha() {
    document.getElementById("contenedor").scrollLeft += width;
}

function moverIzquierda() {
    document.getElementById("contenedor").scrollLeft += -width;
}

//ignorar, esto lo haremos al final de todo

function cambiarIdioma() {
    var selector = document.getElementById("selectorIdiomas");
    var idioma = selector.options[selector.selectedIndex].text + "";
    if (idioma.length == "") {

    } else {
        window.location = "/index/index" + idioma + ".html";
    }
    
}