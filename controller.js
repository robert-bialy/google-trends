const express = require('express');
const service = require('./google-trends')
var app = express();

app.get('/dailyTrends', function(request, response) {
    service.getDailyTrends(request.query)
    .then(
        (res) => response.status(200).json(res),
        (error) => response.status(500).json(error))
    .catch(
        (error) => response.status(500).json(error)
    );
})

app.get('/interest', function(request, response) {
    service.getDailyTrends(request.query)
    .then(
        (res) => response.status(200).json(res),
        (error) => response.status(500).json(error))
    .catch(
        (error) => response.status(500).json(error)
    );
})

app.get('/', function (req, res) {
    res.send('hello world')
})

var server = app.listen(8081, () => console.log("Api up and running!"));