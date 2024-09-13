const dados = require('./dados.json');

const menorFaturamento = () => {
    let menorFaturamento;
    for(let i = 0; i < dados.length; i++){
        
        if(i === 0){
            menorFaturamento = dados[i].valor;
        }

        if(menorFaturamento > dados[i].valor && dados[i].valor > 0){
            menorFaturamento = dados[i].valor;
        }
    }
    return menorFaturamento.toFixed(2);
}

const maiorFaturamento = () => {
    let maiorFaturamento;
    for(let i = 0; i < dados.length; i++){
        
        if(i === 0){
            maiorFaturamento = dados[i].valor;
        }

        if(maiorFaturamento < dados[i].valor){
            maiorFaturamento = dados[i].valor;
        }
    }
    return maiorFaturamento.toFixed(2);
}

const media = () => {
    let diasUteis = 0;
    let soma = 0
    for(let i = 0; i < dados.length; i++){
        if(dados[i].valor > 0){
            diasUteis++
            soma += dados[i].valor;
        }
    }

    return (soma / diasUteis).toFixed(2);
}

const diasAcimaDaMedia = (media) => {
    let qntd = 0;

    for(let i = 0; i < dados.length; i++){
        if(dados[i].valor > media){
            qntd++
        }
    }
}


console.log("Menor faturamento: " + menorFaturamento());
console.log("Maior faturamento: " + maiorFaturamento());
diasAcimaDaMedia(media());

