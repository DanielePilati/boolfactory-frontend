//Quando l’utente fa click sul bottone submit del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.

- individuo il form nell documento html
- creo un listner che esegue una funzione qundo viene premuto il bottone

- la funzione calcolerà il preventivo{

  //Il prezzo finale è dato dal numero di ore per prezzo orario.

  - prezzo = ore \* tariffa

  // Supponiamo per semplicità che ogni progetto richieda lo stesso numero di ore di lavoro(es: 10 ore).

  - creo una variabile contenente le ore di lavoro

  //Il prezzo orario per una commissione varia in questo modo:

  // se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€/l’ora
  // se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€/l’ora
  // se la commissione riguarda l’analisi progettuale il prezzo orario è di 33.60€/l’ora

  - creo una variabile e gli assegno un valore in base al lavoro scelto {

    - creo un array con le tariffe e lo confronto con la scelta dell'utente

      }

  //L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.

  - creo un array contenente i codici validi
  - SE l'utente ha messo il codice lo confronto con quelli validi

  //Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.

  - elaboro il prezzo finale
  - SE l'utente ha messo il codice verifico che sia valido {

    - SE è valido applico lo sconto al prezzo finale
    - altrimenti stampo codice non valido

      }

  //Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro).\*/

  - stampo il prezzo finale con massimo 2 numeri dopo la virgola

}
