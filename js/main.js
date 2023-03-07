const numeriDom = document.getElementById('numeri');
const timerDom = document.getElementById('timer');
const sceltaDom = document.getElementById('scelta')

const numeriDaGenerare = 5;
const numeriInseriti = [];
const numeriGenerati =[];
const numeriGiusti = [];
let secondi = 30;
let tempoCheScorre = 1000;


while (numeriGenerati.length < numeriDaGenerare){
    let numeroCasuale = (Math.floor(Math.random() * 100 + 1));
    
    if (!numeriGenerati.includes(numeroCasuale)){
        numeriGenerati.push(numeroCasuale);
    }
}

console.log (numeriGenerati)


for (let i = 0; i <numeriGenerati.length; i++){
    numeriDom.innerHTML += `<li>${numeriGenerati[i]}</li>`
}

const clock = setInterval(function() {

    if (secondi == 0) {
        clearInterval(clock);
        timerDom.innerHTML = "";
        numeriDom.innerHTML ="";
    } else {
        timerDom.innerHTML = `ti rimangono ancora ${secondi} secondi`;
        secondi--;
    }

}, tempoCheScorre);


setTimeout(inserisciNumero, 32000);
function inserisciNumero(){
    while (numeriInseriti.length < numeriDaGenerare){
        let numeroScelto = parseInt(prompt('inserisci un numero'));
        numeriInseriti.push(numeroScelto)
        if (numeriGenerati.includes(numeroScelto)){
            numeriGiusti.push(numeroScelto)
            console.log(numeroScelto)
        }      
        console.log(numeriGiusti)
    }

    console.log(numeriInseriti)
    sceltaDom.innerHTML = `hai scelto ${numeriInseriti} e hai indovinato ${numeriGiusti} per un totale di ${numeriGiusti.length}`
}





