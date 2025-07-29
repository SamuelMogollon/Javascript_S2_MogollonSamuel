// consumo de API
// mediante XMLHttpRequest

//Modularizar el consumo de la api
function buscarPersonaje() {
    const idIngresado = prompt("Ingrese el ID del personaje: ")
    const xhr = new XMLHttpRequest(); //Importacion del XML
    const url = `https://swapi.py4e.com/api/people/${idIngresado}` //acento Inverso ``
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const daticos = JSON.parse(xhr.responseText);
                alert("name: " + daticos["name"] + "\n" + "height: " + daticos["height"] + "\n" + "mass: " + daticos["mass"] + "\n")
            }
            catch (err) {
                console.log(err.message); //si algo malo pasa simplemente imprima el mensaje
            }
        }
    };
    xhr.send();
}


buscarPersonaje();