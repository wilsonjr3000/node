// let nota1 = 10
// let nota2 = 7
// let nota3 = 8
// let nota4 = 10

// let media = (nota1 + nota2 + nota3 + nota4)/4 

// console.log(media)

const notas = [10, 7, 8, 10]

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

// notas.push (11)

// remove
// notas.pop ()

// ordena // reverse // 
let rs = notas.sort ()

console.log (rs)

// const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

// for(let i = 0; i < nomes.length; i = i + 1 ) {
//     console.log('[for]', nomes[i]);
// }


// nomes.forEach(function(nome, i) {
//     console.log('[forEach]', nome, i);
// })


// nomes.map(function(nome, i) {
//     console.log('[map]', nome, i);
// })

// function nossoForEach(arr, funcao) {
//     for(let i = 0; i < arr.length; i = i + 1) {
//         funcao(arr[i], i);
//     }
// }

// nossoForEach(['nome', 'nome2'], function(nome, indice) {
//     console.log(nome, indice)
// })