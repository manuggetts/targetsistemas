const fs = require('fs');

const dados = JSON.parse(fs.readFileSync('dados.json', 'utf8'));

const faturamentoDiario = dados.filter(d => d.valor > 0);
const totalFaturamento = faturamentoDiario.reduce((acc, curr) => acc + curr.valor, 0);
const mediaFaturamento = totalFaturamento / faturamentoDiario.length;

const menorFaturamento = Math.min(...faturamentoDiario.map(d => d.valor));
const maiorFaturamento = Math.max(...faturamentoDiario.map(d => d.valor));
const diasAcimaDaMedia = faturamentoDiario.filter(d => d.valor > mediaFaturamento).length;

console.log(`Menor faturamento: R$${menorFaturamento}`);
console.log(`Maior faturamento: R$${maiorFaturamento}`);
console.log(`Dias acima da média: ${diasAcimaDaMedia}`);