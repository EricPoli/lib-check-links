const fetch = require('node-fetch')

function manageError(fault) {
    throw new Error(fault.message)
}

async function checkStatus(arrayLinks) {
    try {
        const arrayStatus = await Promise
            .all(arrayLinks
            .map(async url => {
                const respose = await fetch(url)
                return respose.status
        }))
        return arrayStatus
    } catch(fault) {
        manageError(fault)
    }
    
}

function generateArrayURLs(arrayLinks) {
    //Loop p/ cada objeto {chave: valor}
    return arrayLinks.map(objectLink => Object
        .values(objectLink).join())
}

async function validURLs(arrayLinks) {
    const links = generateArrayURLs(arrayLinks)
    const statusLinks = await checkStatus(links)

    const result = arrayLinks.map((objectLink , index) => ({ 
        // ... == spread operator, edita o objeto
        ...objectLink , status: statusLinks[index] }))
        return result 
}

module.exports = validURLs