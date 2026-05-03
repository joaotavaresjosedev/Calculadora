function atualizarCampo(numero){
    if(campo.value === '0'){
        campo.value = numero;
    } else{
        campo.value = campo.value + numero;
    }
}

const campo = document.getElementById('inputCampo');
let operador = '';
let numero1 = 0;

function atualizarOperacao(op) {
    operador = op;
    numero1 = parseFloat(campo.value);
    campo.value = '0';
}

function apagarNumero(params) {
    const valoratual = campo.value;
    if (valoratual.length > 1) {
        campo.value = valoratual.slice(0, -1);
    } else {
        campo.value = '0';
    }
}

function resolver() {
    let numero2 = parseFloat(campo.value);
    let resultado = 0;

    switch (operador) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } 
            break;
    }

    campo.value = resultado.toString();
}

function limpar(params) {
    campo.value = '0';
    operador = '';
    numero1 = 0;
    numero2 = 0;
}