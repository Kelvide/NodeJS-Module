// Creating an HTTPS module
// url the destination and send is the data to send to the destination
const request = require('./request')
const response = require('./response')

function makeRequest(url, send) {
    request.send(url, send)
    return response.read();
}

const responseData = makeRequest('https://google.com', "hello")
console.log(responseData)