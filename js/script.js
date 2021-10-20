//dichiaro variabili per il select il btn e il container della griglia
const selectLivelloDifficolta = document.getElementById("game-level");
const btnStartGame = document.getElementById("btn-start-game");
const gridContainer = document.querySelector(".grid-container");

// metto in ascolto il pulsante
btnStartGame.addEventListener("click", function () {
    //   creo variabile che legge il valore della select
    levelGame = selectLivelloDifficolta.value;
    console.log("livello " + levelGame);
    // al click una funzione mi crea in numero di celle da creare in base al livello del gioco
    let numeroCelle = cellNumberGeneretor(levelGame);
    console.log("numero celle " + numeroCelle);
    //uso una funzione per creare tante celle quante quelle calcolate nella let usata per calcolare il numero delle celle
    gridGenerator(numeroCelle);

    let quantitaBombe = 16;
    console.log("quantità bombe " + quantitaBombe);

    let numBombe = posizioniBombe(16, numeroCelle);
    console.log(numBombe);



});


//creo la funzione per generare il numero delle celle

function cellNumberGeneretor(level) {
    //creo varibile dove salvare la qunatita di celle
    let cellNumber;
    //asseconda dei lv genero tot celle
    switch (parseInt(level)) {
        //facile valore 1
        case 1:
            cellNumber = 100;
            break;
        case 2:
            cellNumber = 81;
            break;
        case 3:
            cellNumber = 49;
            break;
    }
    return cellNumber;
};

//creo funzione per creare le celle
function gridGenerator(numCell) {
    //imposto la griglia vuota im bodo da resettare se premo più volte il bottone
    gridContainer.innerHTML = "";
    //calcolo quante delle mettere per riga per ottenere un quadato
    const cellPerRiga = Math.sqrt(numCell);

    //calcolo le dimensioni di un quadrato
    const cellSize = 100 / cellPerRiga;


    //creo cilclo per generare le celle

    for (i = 0; i < numCell; i++) {
        //creo cella e assegno le dimensioni
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = cellSize + "%";
        cell.style.height = cellSize + "%";


        //inserisco la cella nel html
        gridContainer.append(cell);

        //inserisco i numeri
        cellContent = [i + 1];
        cell.innerHTML += cellContent;



        //metto in ascolto la cella
        //al click applica la funzione che toglie e mette la classe per il bg
        cell.addEventListener("click", bgClick);

    }
}
//funzione per il clik sulle celle
function bgClick() {
    this.classList.toggle("bg-click");

}



//fare una funz che genera 16 numeri casuali tra il 1 e il numero delle celle del lv


//fare funz per numeri random con un min e max
function randomNumGeneretor(numMin, numMax) {
    const numRandom = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
    return numRandom;
}

//fare una funz che crea 16 numeri random che corrispondono alle posizioni delle bombe

function posizioniBombe(numBombe, numCelle) {

    let arrayBombe = [];
    while (arrayBombe.length < numBombe) {
        let numRandom = randomNumGeneretor(1, numCelle);

        //devo controllare che i numeri inseriti sia non univoci
        let numeroDoppione = arrayBombe.includes(numRandom);// numero doppione è numRando incluso in arrayBombe

        if (!numeroDoppione) {

            arrayBombe.push(numRandom);

        } else {

        }


    }
    return arrayBombe;
}
