const body = document.getElementById("fondo");

body.style.backgroundImage = ("url('./resources/img/fondoSuperHeroesAPI.jpg')")


function buscarPersonaje() {
  document.getElementById("resultados").innerHTML = ``;
  const nombreUsar = document.getElementById("nombreInput").value.trim();
  console.log(nombreUsar);
  const xhr = new XMLHttpRequest();
  const url = `https://superheroapi.com/api.php/797624f341008e7444b52ecdb74a1481/search/${nombreUsar}`;
  console.log(url);
  xhr.open("GET", url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 3) {
      console.log("cargando...");
    } else if (xhr.readyState === 4 && xhr.status === 200) {
      try {
        const daticos = JSON.parse(xhr.responseText);
        if (daticos.results && daticos.results.length > 0) {
          for (let i = 0; i < daticos.results.length; i++) {
            let resultado = document.getElementById("resultados");
            resultado.innerHTML += `
                        <div class= "d-flex justify-content-center col-2 ">
                            <div class="card p-2">
                                <img class="" src="${daticos["results"][i]["image"]["url"]}" class="card-img-top">
                                <div class="card-body align-items-center ">
                                <p class="card-text">${daticos["results"][i]["name"]}</p>
                                </div>
                            </div>
                        </div>`;
          }
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  };
  xhr.send();
}
