let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

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