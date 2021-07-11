const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const urlEncParser = bodyParser.urlencoded();

app.get('/register', urlEncParser, function(request, response) {
    response.sendFile(__dirname + '/public/register.html');
});
app.get('/contact', urlEncParser, function(request, response) {
    response.sendFile(__dirname + '/public/contact.html');
})
app.post('/register', urlEncParser, function(request, response) {
    if(!request.body) return request.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} ${request.body.userLastName} 
    ${request.body.userAge} ${request.body.userCity}`)
});
app.post('/contact', urlEncParser, function(request, response) {
    if(!request.body) return response.statusCode(400);
    response.send(`${request.body.userName} ${request.body.userPhone}`)
    console.log(request.body)
})

app.get('/', function(request, response) {
    response.send('This is my main page');
})


app.listen(3000)