
function cambiaTexto() {
    var auxiliar = "";

    for (var i = 1; i < 7; i++) {

        auxiliar = "<h" + i + ">Hola mundo</h" + i + ">";
        console.log("<h" + i + ">Hola mundo</h" + i + ">");
        document.getElementById('titulo_' + i).innerHTML = auxiliar;

    }


}
