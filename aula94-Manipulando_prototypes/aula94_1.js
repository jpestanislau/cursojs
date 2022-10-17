//AULA 94_1 - Manipulando Prototype

const my_object = {
    firstKey: 'FirstValue'
}

const my_prototype = {
    chaveComum: 'Valor Comum',
    rir: function(){
        return 'hahahaha';
    }
}

console.log(my_object.__proto__ === Object.prototype); 
// my_object -> Object.prototype

Object.setPrototypeOf(my_object, my_prototype); // Alterando o prototype do objeto. Isso altera a cadeira de prototype
// my_object -> my_prototype -> Object.prototype

console.log(my_object.rir());