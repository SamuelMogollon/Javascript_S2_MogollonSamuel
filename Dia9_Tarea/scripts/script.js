//creo una funcion para buscar el pokemom
function buscarP(nombrePokemon) {
    //creo una instancia de la clase xmlhttpRequest
    const xml = new XMLHttpRequest()
    //declaro una variable para guardar el endpoint
    const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`
    //creo la peticion al endpoint
    xml.open("GET", url, true);
    // el metodo que seva a ejecutar cada vez que la peticion cambie de estado
    xml.onreadystatechange = function () {
        //creo una condicional que me diga si se esta ejecutando la funcion
        if (xml.readyState === 3) {
            console.log("cargando...");
            // cxomparo la solicitud completa para comprobar si es exitosa
        } else if (xml.readyState === 4 && xml.status === 200) {
            try {
                //guarda la respuesta de la peticion en la variable "respuesta"
                let respuesta = JSON.parse(xml.responseText)
                document.getElementById("")
            } catch (err) {
                console.log(err.message);
            }
        }
    };
    xml.send();
}



let nombrePokemon = document.getElementById("textbox");
nombrePokemon.addEventListener("keyup", function (presionarEnter) {
    if (presionarEnter.key === "Enter") {
        buscarP(nombrePokemon.value)
    }
})