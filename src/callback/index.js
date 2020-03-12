let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const URL_API = 'https://rickandmortyapi.com/api/character/'


// Realiza peticiones a una API
function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', url_api, true)
    xhttp.onreadystatechange = function (event) {
        // Consult readyState and status on https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
        if (xhttp.readyState === 4) { // 4: request finished and response is ready
            if (xhttp.status === 200) { // 200: OK
                callback(null, JSON.parse(xhttp.responseText))
                
            } else {
                const error = new Error('Error ' + url_api)
                return callback(error, null)
            }
        }
    }
    xhttp.send()
}


fetchData(URL_API, function(error1, data1) {
    if (error1) return console.log(error1)
    fetchData(URL_API + data1.results[0].id, function(error2, data2) {
        if (error2) return console.log(error2)
        fetchData(data2.origin.url, function(error3, data3) {
            if (error3) return console.log(error3)
            console.log(`Personages ${data1.info.count}`)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })

})