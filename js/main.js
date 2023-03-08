const numeriDom = document.getElementById('numeri');
const timerDom = document.getElementById('timer');
const sceltaDom = document.getElementById('scelta');

const numeriDaMostrare = generaNumeriCasuali(5, 1, 100) ;
console.log (numeriDaMostrare);
let secondi = 30;


for (let i = 0; i <numeriDaMostrare.length; i++){
    numeriDom.innerHTML += `<li>${numeriDaMostrare[i]}</li>`
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

}, 1000);


//funzioni
function generaNumeriCasuali(numeriDaGenerare, min, max){
    const numeriGenerati =[];
    while (numeriGenerati.length < numeriDaGenerare){
        let numeroCasuale = (Math.floor(Math.random() * max + min));
        
        if (!numeriGenerati.includes(numeroCasuale)){
            numeriGenerati.push(numeroCasuale);
        }
    }
    return numeriGenerati;
}


setTimeout(inserisciNumero, 32000);
function inserisciNumero(){
    const numeriInseriti = [];
    const numeriGiusti = [];
    while (numeriInseriti.length < numeriDaMostrare.length){
        let numeroScelto = parseInt(prompt('inserisci un numero'));
        numeriInseriti.push(numeroScelto);
        if (numeriDaMostrare.includes(numeroScelto)){
            numeriGiusti.push(numeroScelto);
            
        }      
        console.log(numeriGiusti);
    }

    console.log(numeriInseriti);
    sceltaDom.innerHTML = `hai scelto ${numeriInseriti} e hai indovinato ${numeriGiusti} per un totale di ${numeriGiusti.length}`;
}






