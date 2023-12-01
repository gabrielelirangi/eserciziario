//------------------------ESERCIZI SULLA CALLBACK---------------------------------------------

/*Es 1: Calcolo della Somma
Scrivi una funzione chiamata calcolaSomma che accetti due numeri e una callback. 
La funzione deve sommare i due numeri e passare il risultato alla callback. 
Crea due callback separate: una per visualizzare il risultato ed una per moltiplicare il risultato per 2. */

function calcolaSomma(a, b, callback) {
  let somma = a + b;
  callback(somma);
}

function callRisultato(risultato) {
  console.log(risultato);
}

function callMoltiplicare(risultato) {
  console.log(risultato * 2);
}

// console.log(calcolaSomma(2,3, callRisultato));
// console.log(calcolaSomma(2,3, callMoltiplicare));

//------------------------------------------------------------------------------------------------------------

/*Es 2: Filtraggio di Elementi
Scrivi una funzione chiamata filtraNumeri che accetti un array di numeri e una callback di filtro. 
La funzione deve utilizzare la callback per filtrare l'array e restituire un nuovo array contenente 
solo gli elementi che soddisfano il criterio definito dalla callback. 
Crea due callback separate: una per restituire i numeri pari e una per restituire i numeri maggiori di 10. */

function filtraNumeri(arrayNumeri, callbackFiltro) {
  let arrayFiltrato = arrayNumeri.filter(callbackFiltro);
  return arrayFiltrato;
}

function callNumeroPari(numero) {
  return numero % 2 == 0;
}

function callMaggiore(numero) {
  return numero > 10;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30];
// console.log(filtraNumeri(array, callNumeroPari ));
// console.log(filtraNumeri(array, callMaggiore ));

//------------------------------------------------------------------------------------------------------------

/*Es 3: Manipolazione di Stringhe
Scrivi una funzione chiamata trasformaStringhe che accetti un array di stringhe e una callback di manipolazione. 
La funzione deve utilizzare la callback per manipolare ogni stringa nell'array e 
restituire un nuovo array contenente le stringhe trasformate. Crea due callback separate: 
una per convertire le stringhe in maiuscolo e una per aggiungere "!!!" alla fine di ogni stringa, 
ottenendo così una versione esclamativa di ogni stringa.

Istruzioni generiche per lo svolgimento:
Definisci le funzioni richieste seguendo le tracce fornite.
Riempi il codice di console.log!
Utilizza le callback fornite per eseguire le azioni specificate.
Testa le tue funzioni con dati di esempio per verificare che producano i risultati attesi.*/

let arrayStringhe = ["ciao", "buonasera", "arrivederci"];

function trasformaStringhe(arrayStringhe, callback) {
  return arrayStringhe.map(callback);
}

function parolaMaiuscola(parola) {
  return parola.toUpperCase();
}

function aggiungiSimbolo(parola) {
  return parola + "!!!";
}

// console.log(trasformaStringhe(arrayStringhe, parolaMaiuscola));
// console.log(trasformaStringhe(arrayStringhe, aggiungiSimbolo));

//----------------------- ESERCIZI PROMISE-----------------------------------------------------------------------------

/*Es 1: Recupero Dati da un Server
Scrivi una funzione chiamata recuperaDati che simula il recupero di dati da un server.
La funzione deve restituire una Promise che, dopo 3 secondi, 
si risolve con un oggetto contenente dati immaginari (ad esempio, { risultato: "Dati recuperati con successo!" }). */

function recuperaDati() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let oggetto = { risultato: "Dati recuperati con successo!" };
      resolve(oggetto);
    }, 3000);
  });
}

recuperaDati().then((dati) => {
  // console.log(dati);
});

//------------------------------------------------------------------------------------------------------------------

/*Es 2: Elaborazione di Stringhe
Scrivi una funzione chiamata trasformaStringa che accetti una stringa e restituisca una Promise. 
La Promise dovrebbe risolversi dopo 2 secondi con una nuova stringa ottenuta dalla concatenazione della stringa 
originale con il messaggio
" - Trasformata con successo!". */

function trasformaStringa(stringa) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stringa + " - Trasformata con successo!");
    }, 2000);
  });
}

trasformaStringa("questa e' la stringa").then((risultato) => {
  // console.log(risultato);
});

//-----------------------------------------------------------------------------------------------------------------

/*Es 3: Simulazione di Errore
Scrivi una funzione chiamata simulaErrore che restituisca una Promise. 
La Promise deve respingersi immediatamente con un messaggio di errore personalizzato, 
ad esempio "Errore durante l'esecuzione dell'operazione".

Istruzioni generiche per lo svolgimento:
Definisci le funzioni richieste seguendo le tracce fornite.
Utilizza le Promise in modo che ciascuna traccia rispecchi le specifiche date.
Testa le tue funzioni utilizzando i metodi then e catch per verificare che le Promise si comportino correttamente.
Questi esercizi vi consentiranno di comprendere meglio come utilizzare le Promise per gestire operazioni asincrone 
e come gestire sia il successo che il fallimento di tali operazioni. */

function simulaErrore() {
  return new Promise((resolve, reject) => {
    reject("Errore durante l'esecuzione dell'operazione");
  });
}

simulaErrore()
  .then((risultato) => {
    // console.log(risultato)
  })
  .catch((errore) => {
    // console.error(errore);
  });

//------------------------------------------- ESERCIZI ASYNC & AWAIT --------------------------------

/* Es 1: Recupero Dati da una API
Scrivi una funzione recuperaDatiDaAPI che simula il recupero di dati da una API remota. 
La funzione deve restituire una Promise che si risolve dopo 3 secondi con un oggetto contenente dati immaginari 
(ad esempio, { risultato: "Dati dalla API" }). Utilizza async/await per gestire l'operazione asincrona.*/

function richiestaAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const datiSimulati = { risultato: "Dati dalla API" };
      resolve(datiSimulati);
    }, 3000);
  });
}

async function recuperaDatiDaAPI() {
  try {
    const dati = await richiestaAPI();
    return dati;
  } catch (errore) {
    throw new Error(
      "Errore durante il recupero dei dati dall'API: " + errore.message
    );
  }
}

recuperaDatiDaAPI()
  .then((dati) => {
    // console.log("Dati recuperati:", dati);
  })
  .catch((errore) => {
    // console.error(errore.message);
  });

//-----------------------------------------------------------------------------------------------------------

/*Es 2: Elaborazione di Dati
Scrivi una funzione elaboraDati che accetti un oggetto contenente dati e restituisca una Promise. 
La Promise dovrebbe risolversi dopo 2 secondi con un nuovo oggetto ottenuto dalla manipolazione dei dati originali 
(ad esempio, aggiungendo un campo "modificato: true"). Utilizza async/await per gestire l'elaborazione asincrona dei dati.  */

function elaborazioneDatiOriginali(dati) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const datiModificati = { ...dati, modificato: true };
      resolve(datiModificati);
    }, 2000);
  });
}

async function elaboraDati(datiOriginali) {
  try {
    const datiElaborati = await elaborazioneDatiOriginali(datiOriginali);
    return datiElaborati;
  } catch (errore) {
    throw new Error(
      "Errore durante l'elaborazione dei dati: " + errore.message
    );
  }
}

const datiIniziali = { campo1: "valore1", campo2: "valore2" };

elaboraDati(datiIniziali)
  .then((datiModificati) => {
    // console.log("Dati elaborati:", datiModificati);
  })
  .catch((errore) => {
    // console.error(errore.message);
  });

//--------------------------------------------------------------------------------------------------------------------

/*Es 3: Concatenazione di Stringhe Asincrona
Scrivi una funzione concatenaStringhe che accetti due stringhe e restituisca una Promise. 
La Promise dovrebbe risolversi dopo 1 secondo con la concatenazione delle due stringhe. 
Utilizza async/await per gestire l'operazione di concatenazione in modo asincrono.

Istruzioni generiche per lo svolgimento:
Definisci le funzioni richieste seguendo le tracce fornite.
Utilizza async/await nelle funzioni per gestire le operazioni asincrone.
Testa le tue funzioni utilizzando i metodi then e catch per verificare che le Promise si comportino correttamente.
Puoi creare esempi di utilizzo delle funzioni all'interno di un blocco async per testarle e visualizzare i risultati.
Questi esercizi ti consentiranno di applicare e comprendere meglio come utilizzare async/await nella gestione 
delle operazioni asincrone in JavaScript. */

function concatenaStringhe(stringa1, stringa2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const risultato = stringa1 + stringa2;
      resolve(risultato);
    }, 1000);
  });
}

async function eseguiConcatenazione() {
  try {
    const risultatoConcatenazione = await concatenaStringhe("Ciao, ", "mondo!");
    console.log("Risultato della concatenazione:", risultatoConcatenazione);
  } catch (errore) {
    console.error(
      "Errore durante la concatenazione delle stringhe:",
      errore.message
    );
  }
}

eseguiConcatenazione();
