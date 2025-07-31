+function buscarP() {
    const Id = document.getElementById("mainInput").value;
    const xhr = new XMLHttpRequest();
    const url = `https://pokeapi.co/api/v2/pokedex/${Id}`;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                displayPoke(data)
            }
    };
    xhr.send();
}

function mostrarP(datos) {
    const pokemon = document.getElementById("Mostrar");
    const nombreP = (datos["name"].chatAt(0).toUpperCase()) + (datos["name"].slice(1))
    pokemon.innerHTML = `${datos["id"]} - ${nombreP}`
}