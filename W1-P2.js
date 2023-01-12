/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 
 */

/* SCRIVI QUI LA TUA RISPOSTA */

/* I datatype sono 5: Number, string, boolean, undefined e null.
 1) number: sono dei numeri.
 Il range è compreso tra -(-253;-1) +(253;-1). In javascript sovente si utilizzano i float ossia numeri con aritmetica a virgola mobile.
 let numeroscelto=7;
 console.log(numeroscelto);
 2)string: è una sequenza di caratteri delimitati da 'o'e può essere di lunghezza arbitraria a partire da 0.
 Quando nella stringa è presente solo "" vuol dire che essa è vuota.
 let stringa1="ciao"
 let stringa2='ciaone'
 3)boolean: è un entità logica che può essere o vera o falsa.
 4)undefined:rappresenta un valore che non esiste. Alla variabile non viene assegnato nessun valore in esame. Esempio: let stringa
 5)null: Valore nullo che non necessariamente è zero. stringa=null. */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.

*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*Sono raccolte di chiavi primarie ossia delle properties.
Ad esempio : { "nome" : "francesco" , "cognome": "bartolotta" , "isfunny":"no"  } 

let studente-universitario1{
    nome:"francesco";
    cognome:"bartolotta"
    corso-di-studi:"ingegneria gestionale"
}

*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let numero1=12;
let numero2=20;
console.log(numero1+numero2); 
Abbiamo dichiarato due variabili numero1 e numero2 che sono 12 e 20 e successivamente abbiamo stampato il risultato col console.log(numero1+numero2)
*/


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*  let x=12;
In questo caso ho deciso di usare la parola chiave let e assegnarsi il valore 12 come stabilito.

*/

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* 
 let stringa="francesco";
 console.log("il mio nome è" + stringa);
 In questo caso abbiamo utilizzato la parola chiave stringa e l' abbiamo chiamata col nostro nome. Prima del nome c'è il simbolo = poichè è necessario per non avere errori di scrittura
 del nostro codice.

*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

 /* let numero=4;
 let x=12;
 let differenza=numero-x;
 console.log("la differenza è:" + differenza); */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let name1="john";
let name2="John";
console.log(name1!=name2);

Abbiamo dichiarato due variabili :  john che si chiama name1 e poi name2 John.
Dopo abbiamo verificato che fossero diverse e abbiamo deciso di utilizzare != col consolelog.
Ora abbiamo la conferma che sono diverse tra loro.

Per risolvere la seconda parte usiamo questo:

console.log(name1.toLowerCase() == name2.toLowerCase());
Le stringhe sono state trasformate in lowercase , hanno di conseguenza lo stesso valore ("john"). Il risultato dell'operazione finale è "true". */

