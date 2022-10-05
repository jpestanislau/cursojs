function Produto(nome, preco, estoque, peso){
    this.nome = nome;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //É visivel?
        value: estoque, //O valor
        writable: false, //Ela Pode ser alterada?
        configurable: false //Posso redefinir as propriedade? Deletavel?
    });

    Object.defineProperties(this,{
        preco:{
            enumerable: true,
            value: preco,
            writable: false,
            configurable: false 
        },
        peso: {
            enumerable: true, 
            value: peso,
            writable: false,
            configurable: false
        }
    });
}


const produto01 = new Produto('Camiseta', 20.34 , 3);
produto01.estoque = 500;

console.log(produto01);

console.log(Object.keys(produto01)); //Retorna uma lista com todas as chaves/atributos do objeto

for(let chave in produto01){ //Percore todas as chaves
    console.log(chave);
}

