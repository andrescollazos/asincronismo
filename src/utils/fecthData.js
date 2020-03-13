let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// Realiza peticiones a una API
const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', url_api, true)
        xhttp.onreadystatechange = (() => {
            // Consult readyState and status on https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
            if (xhttp.readyState === 4) { // 4: request finished and response is ready
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error(`Error ${url_api}`))
            }
        })
        xhttp.send()
    })
}

module.exports = fetchData
