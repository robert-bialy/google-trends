import { Router } from 'express';
import GoogleTrendsController from '../controllers/google-trends-controller'
const controller = require('../controllers/google-trends-controller');
const routes = Router();

routes.get('/dailyTrends', function(request, response) {
    GoogleTrendsController.getDailyTrends(request,  response);
})

routes.get('/interest', function(request, response) {
    GoogleTrendsController.interestOverTime(request,  response);
})

routes.get('/realTimeTreands', function (request, response) {
    GoogleTrendsController.realTimeTrends(request,  response);
})

routes.get('/', function (req, res) {
    res.send('hello world')
})

export default routes;