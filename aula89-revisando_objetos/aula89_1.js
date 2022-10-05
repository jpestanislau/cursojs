//Declaração literal de objeto
const pessoa = {
    nome:'Luiz',
    sobrenome:'Alfredo',
    idade: 23,
    getDataNascimento: function(){
        const dataAtual = new Date();
        console.log('test');
        return dataAtual.getFullYear() - this.idade;
    }
};

pessoa.falarNome = function(){
    return `${this.nome} está falando o seu nome!`;
}


//Acessando atributos
console.log(pessoa['nome']);
console.log(pessoa.sobrenome);
let chave = 'idade';
console.log(pessoa[chave]);

//Percorendo chaves(atributos) de um objeto
for(let chave in pessoa){
    console.log(chave);
}

//Invocando metodos
console.log(pessoa.falarNome());
console.log(pessoa.getDataNascimento());

//Criação de objeto com construtor
const arvore = new Object();
arvore.nome ='Palmeira'
arvore.sobrenome = 'Almeida'
delete arvore.sobrenome;
console.log(arvore);