const campo = document.getElementById('inputCampo');
let operacao = '';
let numero1 = 0;

function atualizarOperacao(op) {
    operacao = op;
    numero1 = parseInt(campo.value);
    campo.value = '0';
}

function resolver(){
    let numero2 = parseInt(campo.value);
    let resultado = 0;

    switch(operacao){
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
            resultado = numero1 / numero2;
            break;
    }

    campo.value = resultado;
}

function limpar() {
    campo.value = '0';
    operacao = '';
    numero1 = 0;
}

function atualizarCampo(numero){

    if(campo.value === '0'){
        campo.value = numero;
    } else{
        campo.value = campo.value + numero;
    }
}