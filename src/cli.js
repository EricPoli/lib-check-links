#!/usr/bin/env node

//cli == command line interface (prompt)

const getFile = require('./script')
const validURLs = require('./http-validation')
const chalk = require('chalk')

const path = process.argv

async function processText(filePath) {
    const result = await getFile(filePath[2])
    if (path[3] === 'validar') {
        console.log(chalk.yellow('Links validados' , await validURLs(result)))
    }else {
        console.log('Listas de links: ' , result)
    }
} //Mostra o resultado da analise do texto e aguarda o envio da função getFile

processText(path)