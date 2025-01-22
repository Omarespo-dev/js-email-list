//  Attraverso l’apposita API di Boolean
//  https://flynn.boolean.careers/exercises/api/random/mail
//  generare 10 indirizzi email e stamparli in pagina all’interno di una lista.


// SELEZIONE ELEMENTO DI OUTPUT/INPUT
let outputLi = document.getElementById("containerLista")
const inputButton = document.querySelector(".button")


// FACCIO FUNCTION DOVE ALL INTERNO ABBIAMO ....

function emailGenerate(){

    // FACCIO CICLO FOR DOVE GLI DICO DI STAMPARE 10 EMAIL DIVERSE
    for(let i = 0; i < 10; i++){
    
        // FACCIO UNA RICHIESTA VERSO UN SERVER DI TIPO GET 
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then (response => {
            
            // ESEGUO TUTTO IL CODICE SE VA A BUON FINE, ALTRIMENTI CATCH
    
            // variabile dell oggetto response.data
            const result = response.data
    
            // Variable dove ricavo email da result
            let email = result.response
    
            // STRINGA CON BACKTICK DOVE INSERISCO LA EMAIL
            let stringa= `<li>${email}</li>`
    
    
            // ELEMENTO DI OUTPUT
            outputLi.innerHTML += stringa
    
        })

        .catch(error => {
            
            //CODICE DA ESEGUIRE IN CASO DA ERRORE
            console.error(error)
        })
    
    
    }

    // RESETTO IL CONTENUTO DELLA LISTA
    outputLi.innerHTML = "";
}


// AGGIUNGO EVENTO BOTTON E GLI DO LA FUNZIONE DELLE EMAIL GENERATE
inputButton.addEventListener("click",emailGenerate)

























