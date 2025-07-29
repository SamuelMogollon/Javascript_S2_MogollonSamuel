// consumo de API
// mediante XMLHttpRequest

//Modularizar el consumo de la api
function buscarPersonaje() {
    const nombre = prompt("Ingrese el nombre del personaje: ")
    const xhr = new XMLHttpRequest(); //Importacion del XML
    const url = `https://rickandmortyapi.com/api/character?name=${nombre}` //acento Inverso ``
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const daticos = JSON.parse(xhr.responseText);
                alert("The character is: "+"\n"+"Name: " + daticos["results"][0]["name"] +"\n"+ "status:" + daticos["results"][0]["status"] + "\n"+"Especie: " + daticos["results"][0]["species"]);
            }
            catch (err) {
                console.log(err.message); //si algo malo pasa simplemente imprima el mensaje
            }
        }
    };
    xhr.send();
}


buscarPersonaje();