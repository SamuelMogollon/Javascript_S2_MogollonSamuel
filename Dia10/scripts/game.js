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

pedirCartaBtn.addEventListener('click', () => pedirCarta(true));
plantarseBtn.addEventListener('click', plantarse);

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

async function iniciarJuego(url) {
  try {
     const data = await hacerPeticion(`${API_BASE_URL}new/shuffle/?deck_count=6`);
     deckId = data.deck_id;

    containerCardsPlayer.innerHTML = '';
    containerCardsCrupier.innerHTML = '';
    puntuacionJugador = 0;
    puntuacionCrupier = 0;
    cartasJugador = [];
    cartasCrupier = [];
    pedirCartaBtn.disabled = false;
    plantarseBtn.disabled = false;

    console.log('Juego Iniciado. Deck ID: ', deckId);

    repartirCartasIniciales();
  }
  catch (error) {
    console.error('Error al iniciar el juego:', error);
  }
};