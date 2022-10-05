//Aula 92_3 - Iterando sob atributos de um objeto
const produto = {
    nome: 'Pente',
    preco: 1.3,
    tipo: 'Grande'
};

console.log(Object.keys(produto));// Retorna um array com todas as chaves 
console.log(Object.values(produto));// Retorna um array com todas os valores
console.log(Object.entries(produto));// Retorna um array com todas as entradas (chave + valor)

for (let entrada of Object.entries(produto)) {
    console.log(entrada[0], entrada[1]);
}