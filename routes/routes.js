import { Router } from 'express';
import GoogleTrendsController from '../controllers/google-trends-controller';
import AuthenticationController from '../controllers/authentication-controller'
const routes = Router();

routes.get('/dailyTrends', (req, res, next) => AuthenticationController.verifyToken(req, res, next), (request, response) => GoogleTrendsController.getDailyTrends(request,  response));
routes.get('/interest', (req, res, next) => AuthenticationController.verifyToken(req, res, next), (request, response) => GoogleTrendsController.interestOverTime(request,  response));
routes.get('/realTimeTreands', (req, res, next) => AuthenticationController.verifyToken(req, res, next), (request, response) => GoogleTrendsController.realTimeTrends(request,  response));

routes.post('/login', (request, response) => AuthenticationController.login(request, response));
routes.get('/', (req, res) => res.send('hello world'));

export default routes;