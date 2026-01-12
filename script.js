// Variavel do display
const displayText = document.getElementById("displayText")

// Logica da calculadora

function appendToDisplay (input) {
    displayText.value += input;
    
}

function clearDisplay() {
    displayText.value = '';
}

function calculate() {
    try {
        displayText.value = eval(displayText.value)
    }
    catch(error){
        displayText.value = "Erro ao calcular"
    }
}