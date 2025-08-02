function baraja() {

    const xhr = new XMLHttpRequest();
    const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6`
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const daticos = JSON.parse(xhr.responseText);
            console.log(daticos)
        }
    };
    xhr.send();
}

baraja()