const faturamentoDiario = [
    0, 1200, 1000, 0, 3000, 0, 0, 2500, 0, 1800, 3500, 0, 2900, 0
];

function calcularFaturamento(faturamentoDiario) {
    let menorFaturamento = 0;
    let maiorFaturamento = 0;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    // Encontrar o menor e maior faturamento, e calcular a soma dos dias com faturamento
    faturamentoDiario.forEach(valor => {
        if (valor > 0) { // Ignorar dias sem faturamento
            if (valor < menorFaturamento) menorFaturamento = valor;
            if (valor > maiorFaturamento) maiorFaturamento = valor;
            somaFaturamento += valor;
            diasComFaturamento++;
        }
    });

    // Calcular a média considerando apenas dias com faturamento
    const mediaFaturamento = somaFaturamento / diasComFaturamento;

    // Contar dias com faturamento acima da média
    let diasAcimaDaMedia = 0;
    faturamentoDiario.forEach(valor => {
        if (valor > mediaFaturamento) {
            diasAcimaDaMedia++;
        }
    });

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

// Chamando a função e mostrando os resultados
const resultado = calcularFaturamento(faturamentoDiario);
console.log(`Menor faturamento: R$ ${resultado.menorFaturamento}`);
console.log(`Maior faturamento: R$ ${resultado.maiorFaturamento}`);
console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
