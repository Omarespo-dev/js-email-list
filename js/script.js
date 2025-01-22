// Attraverso l’apposita API di Boolean
//  https://flynn.boolean.careers/exercises/api/random/mail
//  generare 10 indirizzi email e stamparli in pagina all’interno di una lista.


// SELEZIONE ELEMENTO DI OUTPUT
const outputLi = document.getElementById("containerLista")
// console.log(outputLi)


// Aggiungo libreria Axios dove poi inserisco la mia api elencata sopra

let arrayEmpty = []
console.log(arrayEmpty)

for(let i = 0; i < 10; i++){
    
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then (response => {
        
        // ESEGUO TUTTO IL CODICE SE VA A BUON FIN OK, ALTRIMENTI CATCH

        // variabile dell oggetto response.data
        const result = response.data

        // Variable dove ricavo email dal data
        let email = result.response
        
        // Faccio push nell array
        arrayEmpty.push(email)
        

        // STRINGA CON BACKTICK DOVE INSERISCO LA EMAIL
        let stringa= `
        <li>${email}</li>
        <li>${email}</li>
        <li>${email}</li>
        <li>${email}</li>
        <li>${email}</li>
        <li>${email}</li>
        <li>${email}</li>
        <li>${email}</li>`


        // ELEMENTO DI OUTPUT
        outputLi.innerHTML = stringa
    })
    .catch(error => {
        
        //CODICE DA ESEGUIRE IN CASO DA ERRORE
        console.error(error)
    })
    .then(() => {
        
        // CODICE DA SEGUIRE A PRESCINDERE DALL'ESITO
    })

}






























