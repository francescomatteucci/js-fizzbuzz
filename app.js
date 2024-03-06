//fare un for che stampi i numeri da 1 a 100  con variabile iniziale 1

for (let i = 1; i <= 100; i++) {
    console.log(i)

    //stampi la parola fizz per i numeri multipli di 3
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if ( i % 5 === 0) {
        console.log("Buzz")
 
    //stampi la parola buzz per i numeri multipli di 5
    //stampi la parola FizzBuzz per i numeri multipli sia di 3 che di 5
}
}
