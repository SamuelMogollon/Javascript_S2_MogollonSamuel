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

pedirCartaBtn.addEventListener("click", () => pedirCarta(true));
plantarseBtn.addEventListener("click", plantarse);

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
hacerPeticion(url);

async function iniciarJuego(url) {
  try {
    const data = await hacerPeticion(
      `${API_BASE_URL}new/shuffle/?deck_count=6`
    );
    deckId = data.deck_id;

    containerCardsPlayer.innerHTML = "";
    containerCardsCrupier.innerHTML = "";
    puntuacionJugador = 0;
    puntuacionCrupier = 0;
    cartasJugador = [];
    cartasCrupier = [];
    pedirCartaBtn.disabled = false;
    plantarseBtn.disabled = false;

    console.log("Juego Iniciado. Deck ID: ", deckId);

    repartirCartasIniciales();
  } catch (error) {
    console.error("Error al iniciar el juego:", error);
  }
}

async function repartirCartasIniciales(url) {
  try {
    const data = await hacerPeticion("${API_BASE_URL}${deckId}/draw/?count=4");

    cartasJugador = [data.cards[0], data.cards[1]];
    cartasCrupier = [data.cards[2], data.cards[3]];

    mostrarCarta(containerCardsPlayer, cartasJugador[0]);
    mostrarCarta(containerCardsPlayer, cartasJugador[1]);

    mostrarCarta(containerCardsCrupier, cartasCrupier[0]);
    mostrarCarta(containerCardsCrupier, cartasCrupier[1], true);

    puntuacionJugador = calcularPuntuacion(cartasJugador);
    puntuacionCrupier = calcularPuntuacion([cartasCrupier[0]]);

    document.getElementById("puntosJ").textContent = puntuacionJugador;
    document.getElementById("puntosC").textContent = puntuacionCrupier;

    if (puntuacionJugador === 21) {
      alert("¡Blackjack! Ganaste automáticamente.");
      terminarJuego();
    }
  } catch (error) {
    console.error("Error al repartir las cartas:", error);
  }
}

async function pedirCarta(esJugador) {
  try {
    const data = await hacerPeticion("${API_BASE_URL}${deckId}/draw/?count=1?");

    const nuevaCarta = data.cards[0];

    if (esJugador) {
      cartasJugador.push(nuevaCarta);
      mostrarCarta(containerCardsPlayer, nuevaCarta);
      puntuacionJugador = calcularPuntuacion(cartasJugador);
      document.getElementById("puntosJ").textContent = puntuacionJugador;

      if (puntuacionJugador > 21) {
        alert("¡Te pasaste de 21! Has perdido. ");
        terminarJuego();
      }
    } else {
      cartasCrupier.push(nuevaCarta);
      mostrarCarta(containerCardsCrupier, nuevaCarta);
      puntuacionCrupier = calcularPuntuacion(cartasCrupier);
      document.getElementById("puntosC").textContent = puntuacionCrupier;
    }
  } catch (error) {
    console.error("Error al pedir carta:", error);
  }
}

function plantarse() {
  terminarJuego();

  const cartasOcultas = containerCardsCrupier.querySelector(".cartaImg.oculta");
  if (cartasOcultas) {
    cartasOcultas.src = cartasOcultas.dataset.originalScr;
    cartasOcultas.classList.remove("oculta");
    puntuacionCrupier = calcularPuntuacion(cartasCrupier);
    puntosCrupierElem.textContent = puntuacionCrupier;
  }
}

const turnoCrupier = async () => {
  while (puntuacionCrupier < 17) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await pedirCarta(false);
  }
  determinarGanador();
};
turnoCrupier();

function mostrarCarta(contenedor, carta, oculta = false) {
  const img = document.createElement("img");
  img.src = carta.image;
  img.alt = `${carta.value} de ${carta.suit}`;
  img.classList.add("cartaImg");

  if (oculta) {
    img.dataset.originalSrc = carta.image;
    img.src = "https://www.deckofcardsapi.com/static/img/back.png";
    img.classList.add("oculta");
  }

  contenedor.appendChild(img);
}

function calcularPuntuacion(cartas) {
  let puntuacion = 0;
  let ases = 0;

  for (const carta of cartas) {
    const valor = carta.value;
    if (["JACK", "QUEEN", "KING"].includes(valor)) {
      puntuacion += 10;
    }
    else if (valor === "ACE") {
      ases++;
      puntuacion += 11;
    }
    else {
      puntuacion += parseInt(valor);
    }
  }

  while (puntuacion > 21 && ases > 0) {
    puntuacion -= 10;
    ases--;
  }
  return puntuacion;
}

function terminarJuego() {
  pedirCartaBtn.disabled = true;
  plantarseBtn.disabled = true;
}

function determinarGanador() {
  let mensaje = "";
  if (puntuacionCrupier > 21) {
    mensaje = "¡El crupier se ha pasado! ¡Ganaste!";
  } else if (puntuacionJugador > puntuacionCrupier) {
    mensaje = "¡Ganaste! Tu puntuación es más alta.";
  } else if (puntuacionJugador < puntuacionCrupier) {
    mensaje = "El crupier gana. Su puntuación es más alta.";
  } else {
    mensaje = "¡Empate! El crupier gana.";
  }

  alert(mensaje);
}

iniciarJuego();