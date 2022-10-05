//AULA 92_1 - Copiando Objetos
const produto01 = {nome: 'Caneca', preco: 1.8}
const produto02 = produto01; //Os objetos estão linkados
produto01.nome = 'Mesmo Nome';
//console.log(produto02.nome);

//Cópia via spread operator
const produto03 = {
    ...produto01,
    novoAtributo: 'Novo valor'
};

produto03.nome = 'Pente'
//console.log(produto01.nome, produto03.nome);

//Cópia via Object.assing()
const produto04 = Object.assign({}, produto01);
console.log(produto04.nome);