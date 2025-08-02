function baraja() {
    const bajaraNueva = document.getElementById("newBaraja").Value;
    const xhr = new XMLHttpRequest();
    const url = `https://deckofcardsapi.com/api/deck/new/`
    xhr.open("GET", url, true);
    xhr
}

baraja()