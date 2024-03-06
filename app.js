document.body.style.backgroundColor = "rgb(8, 59, 76)"
document.body.style.textAlign = "center"
//fare un for che stampi i numeri da 1 a 100  con variabile iniziale 1
const container = document.createElement("div")
container.style.display = "grid"
container.style.gridTemplateColumns = "repeat(7, 1fr)"
container.style.gridGap = "20px"
container.style.width = "1000px"
container.style.margin = "0 auto"

for (let i = 1; i <= 100; i++) {
    const numberElement = document.createElement("div")
    numberElement.style.padding = "10px"
    numberElement.style.aspectRatio = "1"
    numberElement.style.display = "flex"
    numberElement.style.justifyContent = "center"
    numberElement.style.alignItems = "center"
    //stampi la parola fizz per i numeri multipli di 3
    if (i % 3 === 0 && i % 5 === 0) {
        numberElement.textContent = "Fizzbuzz"
        numberElement.style.backgroundColor = "rgb(240, 70, 111)"
    } else if (i % 3 === 0) {
        numberElement.textContent = "Fizz"
        numberElement.style.backgroundColor = "rgb(12, 214, 161)"
    } else if (i % 5 === 0) {

        numberElement.textContent = "Buzz"
        numberElement.style.backgroundColor = "rgb(255, 209, 102)"
        //stampi la parola buzz per i numeri multipli di 5
        //stampi la parola FizzBuzz per i numeri multipli sia di 3 che di 5
    }
    else{
        numberElement.textContent = i
        numberElement.style.backgroundColor = "rgb(19, 137, 178)"
    
    }
    container.appendChild(numberElement);
    
}
document.body.appendChild(container);