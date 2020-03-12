// EJEMPLO 1

// Funcion para sumar dos elementos
function suma(num1, num2) {
    return num1 + num2
}

// Callback para calcular
function calc(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc(4, 5, suma))


// EJEMPLO 2

//Callback para ver la fecha y luego ver la fecha pasados tres segundos
function date(callback) {
    console.log(new Date)
    setTimeout(function () {
        let date = new Date
        callback(date)
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow)
}

date(printDate)

