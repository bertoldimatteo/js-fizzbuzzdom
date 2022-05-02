// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 
// e per i valori che sono sia multipli di 3 che di 5.

const list = document.querySelector(".fizzList");

for ( let count = 0; count <= 100; count++) {
    const element = document.createElement("li");
    element.classList.add("list");
    element.classList.add("fizzListBC")
    element.innerHTML = count;
    list.append(element);

    if ( count % 3 === 0 && count % 5 === 0) {
        element.innerHTML = "FizzBuzz";
        element.classList.remove("fizzListBC")
        element.classList.add("fizzbuzz");
    } else if ( count % 3 === 0) {
        element.innerHTML = "Fizz";
        element.classList.remove("fizzListBC")
        element.classList.add("fizz");
    } else if ( count % 5 === 0) {
        element.innerHTML = "Buzz";
        element.classList.remove("fizzListBC")
        element.classList.add("buzz");
    }
}