// Attraverso l’apposita API di Boolean
//  https://flynn.boolean.careers/exercises/api/random/mail
//  generare 10 indirizzi email e stamparli in pagina all’interno di una lista.


// SELEZIONE ELEMENTO DI OUTPUT
const outputLi = document.getElementById("containerLista")
// console.log(outputLi)


// FACCIO CICLO FOR DOVE GLI DICO DI STAMPARE 10 EMAIL DIVERSE
for(let i = 0; i < 10; i++){
    
    // USO AXIOS .GET DOVE GLI DICO CHE VADO A PRENDERE DALL API LE EMAIL
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then (response => {
        
        // ESEGUO TUTTO IL CODICE SE VA A BUON FIN OK, ALTRIMENTI CATCH

        // variabile dell oggetto response.data
        const result = response.data

        // Variable dove ricavo email da result
        let email = result.response
        console.log(email)

        // STRINGA CON BACKTICK DOVE INSERISCO LA EMAIL
        let stringa= `<li>${email}</li>`


        // ELEMENTO DI OUTPUT
        outputLi.innerHTML += stringa
    })
    .catch(error => {
        
        //CODICE DA ESEGUIRE IN CASO DA ERRORE
        console.error(error)
    })
    .then(() => {
        
        // CODICE DA SEGUIRE A PRESCINDERE DALL'ESITO
    })

}






























