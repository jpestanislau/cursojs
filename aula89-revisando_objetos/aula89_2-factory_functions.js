//Factory function
function criarPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        //Um método que "finge" ser apenas um atributo
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criarPessoa('Pedro', 'Correia');
console.log(p1);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'casa'; // Como se trata de um getter, essa linha não irá alterar nada
console.log(p1.nomeCompleto);