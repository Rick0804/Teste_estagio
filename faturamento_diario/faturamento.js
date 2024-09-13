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

/*
calculoMedia = (contribuicao, soma) => {
    return ((contribuicao / soma) * 100).toFixed(2)
}

const soma = 67836.45 + 36678.66 + 29229.88 + 27165.48 + 19849.53;


console.log("O porcentual da contribuição de SP foi: " + calculoMedia(67836.45, soma))
console.log("O porcentual da contribuição de RJ foi: " + calculoMedia(36678.66, soma))
console.log("O porcentual da contribuição de São Paulo foi: " + calculoMedia(29229.88, soma))
console.log("O porcentual da contribuição de São Paulo foi: " + calculoMedia(27165.48, soma))
console.log("O porcentual da contribuição de São Paulo foi: " + calculoMedia(19849.53, soma))

*/