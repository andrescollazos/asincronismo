// CONSUMIR API DE RICK AND MORTY
const fetchData = require('../utils/fecthData')
const URL_API = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api)
        const character = await fetchData(`${url_api}${data.results[0].id}`)
        const origin = await fetchData(character.origin.url)

        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)
    } catch (error) {
        console.error(error)
    }
}

console.log('Before')
console.log(anotherFunction(URL_API))
console.log('After')

