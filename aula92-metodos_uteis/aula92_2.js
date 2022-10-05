//Aula 92_2 - Propropriedades do Atributo do Objeto
const produto = {nome:'Pente', preco:1.3};
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // Listando as proprieades do atributo 

Object.defineProperty(produto, 'nome', {
    writable: false
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.nome = 'Outro Nome'; // Não irá alterar pois a propriedade writable está falsa;
console.log(produto.nome);