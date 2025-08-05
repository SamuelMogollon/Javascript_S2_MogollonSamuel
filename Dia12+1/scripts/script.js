function buscarPersonaje() {
    document.getElementById("resultados").innerHTML = ``;
    const nombreUsar = document.getElementById("nombreInput").value.trim();
    console.log(nombreUsar);
    const xhr = new XMLHttpRequest();
    const url = `https://superheroapi.com/api.php/797624f341008e7444b52ecdb74a1481/search/${nombreUsar}`;
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        try {
            const daticos = JSON.parse(xhr.responseText);
            if (daticos.results && daticos.results.length > 0) {
                for (let i = 0; i < daticos.results.length; i++) {
                    let resultado = document.getElementById("resultados");
                    resultado.innerHTML += `
                        <div class="card">
                        <img src="${daticos["results"][i]["image"]["url"]}">
                        <h3>${daticos["results"][i]["name"]}</h3>
                        </div>`
                }
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }
    xhr.send();
}

