const getFile = require('../script')
const arrayResult = [
    {
      FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('getFile::', () => {
    it('Deve ser uma função', () => {
        expect(typeof getFile).toBe('function');
    })
    it('Deve retornar array com resultados', async () => {
        const result = await getFile('C:\Users\valde\OneDrive\Documentos\Dev\alura\node\test\files\notes.md')
        expect(result).toEqual(arrayResult);
    })
})





