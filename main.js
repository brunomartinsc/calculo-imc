const form = document.querySelector("#form");

form.addEventListener('submit', function(evento){
    evento.preventDefault();

    const inputpeso = form.querySelector('#peso').value;
    const inputaltura = form.querySelector('#altura').value;

    const peso = Number(inputpeso);
    const altura = Number(inputaltura);

    if(!peso){
        resultados('Peso invalido', false);
        return
    }
    if(!altura){
        resultados('Altura invalida', false);
        return
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;

    resultados(msg, true);

});

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2','Obesidade grau 3'];
    if(imc>=39.9) return nivel[5];
    if(imc>=34.9) return nivel[4];
    if(imc>=29.9) return nivel[3];
    if(imc>=24.9) return nivel[2];
    if(imc>=18.5) return nivel[1];
    if(imc,18.5) return nivel[0];
}

function getImc(peso, altura){
    const imc = (peso/altura **2);
    return imc.toFixed(2);
}

function crearP(){
    const p = document.createElement('p');
    return p;
}

function resultados(msg, isValid){
    const informacoes = document.querySelector('#informacao');
    informacoes.innerHTML = '';
    const p = crearP();

    if(isValid){
        p.classList.add(`positivo`);
    }else{
        p.classList.add(`negativo`);
    }

    p.innerHTML = msg;
    informacoes.appendChild(p);

}