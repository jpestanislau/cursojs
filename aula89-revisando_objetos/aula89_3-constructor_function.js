//Constructor Function
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // existe um "return this" oculto
}

function PessoaCongelada(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);
}

const p1 = new Pessoa('Luiz', 'Miranda');
Object.freeze(p1); //Estou "congelando" todos os valores dentro de o1
console.log(p1);