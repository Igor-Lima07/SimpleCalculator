// Variavel do display
const displayText = document.getElementById("displayText")

// Logica da calculadora
var justEvaluated = false

function calculate() {
    try {
        displayText.value = eval(displayText.value)
        justEvaluated = true
    }
    catch(error){
        displayText.value = "Erro ao calcular"
    }
}

function appendToDisplay (input) {
    if (justEvaluated === true) {
        clearDisplay()
        justEvaluated = false
        displayText.value += input;
    }
    else{
        displayText.value += input;
    }
}

function clearDisplay() {
    displayText.value = '';
}

