const express = require('express');
const service = require('./google-trends')
var app = express();

function handleExceptionCall(promise, response) {
    promise
    .then(
        (res) => {
            response.status(200).send(JSON.parse(res));
        })
    .catch(
        (res) => {
            response.status(500).send(JSON.stringify(res.message));
        });
}

app.get('/dailyTrends', function(request, response) {
    handleExceptionCall(service.getDailyTrends(request.query), response);
})

app.get('/interest', function(request, response) {
    handleExceptionCall(service.interestOverTime(request.query), response);
})

app.get('/realTimeTreands', function (request, response) {
    handleExceptionCall(service.realTimeTrends(request.query), response);
})

app.get('/', function (req, res) {
    res.send('hello world')
})

const PORT = 8080;

app.listen(process.env.PORT || PORT, () => console.log(`Server listening`));