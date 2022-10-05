//Getter e Setters
function Produto(nome, preco, estoque, peso){
    this.nome = nome;
    this.preco = preco;
    this.peso = peso;

    let estoqueInterno = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //É visivel?
        configurable: false, //Posso redefinir as propriedade? Deletavel?
        get: function(){
            return estoqueInterno;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw TypeError('Valor Inválido!');
            }
            estoqueInterno - valor;
        }
    });


}


const produto01 = new Produto('Camiseta', 20.34 , 3, 56);
produto01.estoque = 500;
console.log(produto01);

console.log(Object.keys(produto01)); //Retorna uma lista com todas as chaves/atributos do objeto


function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    }
}

const produto02 = criaProduto('Pedra');
produto02.nome = 'Qualuer coisa!';
console.log(produto02);