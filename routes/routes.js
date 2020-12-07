import { Router } from 'express';
import GoogleTrendsController from '../controllers/google-trends-controller';
const routes = Router();

routes.get('/dailyTrends', (request, response) => GoogleTrendsController.getDailyTrends(request,  response));
routes.get('/interest', (request, response) => GoogleTrendsController.interestOverTime(request,  response));
routes.get('/realTimeTreands', (request, response) => GoogleTrendsController.realTimeTrends(request,  response));

routes.get('/', function (req, res) {
    res.send('hello world')
})

export default routes;