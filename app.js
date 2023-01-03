const prompt = require ('prompt')

//function sum
function sum(num1, num2) {
    let total = 0

    total = num1 + num2

    return total
}

//funtion subtract
function subtract(num1, num2) {
    let total

    total = num1 - num2

    return total
}

//function multiply
function multiply(num1, num2) {
    let total

    total = num1 * num2

    return total
}

//function divide
function divide(num1, num2) {
    let total

    total = num1 / num2

    return total
}

async function init() {
    prompt.start()

    const schema = {
        properties: {
            operation: {
                description: "ingrese 1 para suma, 2 para resta, 3 para multiplicar, 4 para dividi",
                message: "seleccione una opcion valida para continuar",
                type: "integer",
                require: true
            }
        }
    }

    const { operation } = await prompt.get(schema)

    let result = {}
    let total = 0
    let message = ""

    switch (operation) {
        case 1:
            result = await getNumbers()
            total = sum(result.num1, result.num2)
            message = "el total de la suma es:" + total
            console.log(message)
            break
        case 2:
            result = await getNumbers()
            total = subtract(result.num1, result.num2)
            message = "el total de la resta es:" + total
            console.log(message)
            break
        case 3:
            result = await getNumbers()
            total = multiply(result.num1, result.num2)
            message = "el total de la multiplicacion es:" + total
            console.log(message)
            break
        case 4:
            result = await getNumbers()
            total = divide(result.num1, result.num2)
            message = "el total de la divicion es:" + total
            console.log(message)
            break
        
        default:
            init()
            break
    }
}

function getNumbers (){
    const schema = {
        properties: {
            num1: {
                description: "ingrese numero 1",
                message: "seleccione una opcion valida para continuar",
                type: "number",
                require: true
            },
            num2: {
                description: "ingrese numero 2",
                message: "seleccione una opcion valida para continuar",
                type: "number",
                require: true
            }
        }
    }

    return prompt.get(schema)
}

init()