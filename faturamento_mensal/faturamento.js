calculoMedia = (contribuicao, soma) => {
    return ((contribuicao / soma) * 100).toFixed(2)
}

const soma = 67836.45 + 36678.66 + 29229.88 + 27165.48 + 19849.53;


console.log("O porcentual da contribuição de SP foi: " + calculoMedia(67836.45, soma))
console.log("O porcentual da contribuição de RJ foi: " + calculoMedia(36678.66, soma))
console.log("O porcentual da contribuição de São Paulo foi: " + calculoMedia(29229.88, soma))
console.log("O porcentual da contribuição de São Paulo foi: " + calculoMedia(27165.48, soma))
console.log("O porcentual da contribuição de São Paulo foi: " + calculoMedia(19849.53, soma))
