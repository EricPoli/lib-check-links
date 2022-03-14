const fs = require('fs-js');
const chalk = require('chalk') //Importa a biblioteca dos respectivas API

function extractLink(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm //Expressão regular p/ pegar apenas os links e seus títulos
    const arrayResults = []
    let temp

    while((temp = regex.exec(text)) !== null) { 
        arrayResults.push({ [temp[1]]: temp[2] })
    } //Enquanto houver links, eles são colocados dentro do arrayResults
    return arrayResults.length === 0 ? chalk.red('Não há links') : arrayResults 
    //Expressão ternária (tipo de if), identifica se no texto há links e retorna o resultado.
}

function getError(foundError) {
    throw new Error(chalk.red(foundError.code, 'Não há arquivo no caminho'))
 } //Verifica se há algum erro com relação ao diretório do arquivo

async function getFile(pathFile) {
    const encoding = 'utf-8'
    try {
        const text = await fs.promises.readFile(pathFile, encoding)
        return extractLink(text)
    } catch (foundError) {
        getError(foundError)
    }
} //Função assincrona que pega o arquivo e extrai seus links ou chama a função de erro
module.exports = getFile //Exporta a função

function promessa(bool) {
    const x = bool;
    return new Promise((resolve, reject) => {
      if (!x) {
        reject(new Error("falha na promessa"));
      }
      resolve("sucesso na promessa");
    });
   }

getFile('./files/notes.md')

//    function exibeResposta(textoResult) {
//     console.log(textoResult);
//    }
   
//    promessa(false)
//     .then((texto) => exibeResposta(texto))
//    // sucesso na promessa




// function getError(foundError) {
//    throw new Error(chalk.red(foundError.code, 'Não há arquivo no caminho'))
// }

// function getFile(filePath) {
//     const encoding = 'utf-8'
//     fs.promises
//     .readFile(filePath, encoding)
//     .then((text) => console.log(text))
//     .catch((foundError) => getError(foundError))
// }




// function getFile(filePath) {
//     fs.readFile(filePath, encoding = 'utf-8', (foundError, text) => {
//         if (foundError) {
//             getError(foundError)
//         }
//         console.log(chalk.green(text))
//     })
// }
