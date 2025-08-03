const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
let deckId = "";
let cartasJugador = [];
let cartasCrupier = [];
let puntuacionJugador = 0;
let puntuacionCrupier = 0;

const containerCardsPlayer = document.getElementById("containerCardsPlayer");
const containerCardsCrupier = document.getElementById("containerCardsCrupier");
const pedirCartaBtn = document.getElementById("pedirCarta");
const plantarseBtn = document.getElementById("plantarse");

pedirCartaBtn.addEventListener("click",(e)=>{

});
plantarseBtn.addEventListener("click");

function hacerPeticion(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
      
    }
    xhr.send();
  };
}
hacerPeticion(url)

function 