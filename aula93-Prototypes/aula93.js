//AULA 93 - Prototypes

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
}


Pessoa.prototype.atributoComum = 'Esse atributo pertence a todas as pessoas';

const pessoa01 = new Pessoa('Luiz', 'Carvalho');
const pessoa02 = new Pessoa('Miranda', 'Grande');

console.log(Pessoa.prototype === pessoa01.__proto__); // É o mesmo objeto prototype que está linkado em todos os objetos do construtor

console.log(pessoa01.atributoComum);
console.log(pessoa02.atributoComum);