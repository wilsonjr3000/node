import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'erro não conhecido'));    
}

// function pegaArquivo(caminhoDoArquivo) {
//     cosnt fs.promises.readFile(caminhoDoArquivo )
//     .then()
// }

function pegaArquivo(caminhoDoArquivo) {
    // const encoding = 'uft8';
    fs.readFile(caminhoDoArquivo, (erro, texto) => {
        if(erro){
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
}

pegaArquivo('./arquivos/texto1.md');

// console.log(chalk.blue('Hello world!'));


