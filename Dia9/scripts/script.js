// consumo de API
// mediante XMLHttpRequest

//Modularizar el consumo de la api
function buscarPersonaje() {
    const nombreUsar = document.getElementById("nombreInput").value;
    console.log(nombreUsar)
    const xhr = new XMLHttpRequest(); //Importacion del XML
    const url = `https://swapi.py4e.com/api/people/${idIngresado}` //acento Inverso ``
    console.log(url);
    xhr.open("GET",url,true);
    xhr
}


buscarPersonaje();