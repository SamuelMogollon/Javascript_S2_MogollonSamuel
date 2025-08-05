function mirarData(event){
    if (event.key === 'Enter'){
        buscarP();
    }
}


function buscarP() {
    document.getElementById("mostrar").innerHTML``;
    const Id = document.getElementById("textbox").value;
    const xhr = new XMLHttpRequest();
    const url = `https://pokeapi.co/api/v2/pokemon/${Id}`;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                let mostrarData = document.getElementById("mostrar")
                mostrarData.innerHTML = `
                <h1 class="pokemon"> ${data["id"]}. </h1>
                <h1 class="nombreP">${data["name"]} </h1>
                <img src="${data["sprites"]["other"]["showdown"]["front_default"]}">
                `
            }
    };
    xhr.send();
}

