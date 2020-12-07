const service = require('../services/google-trends-service')

class GoogleTrendsController {

    static getDailyTrends(request, response) {
        service.getDailyTrends(request.query)
        .then(
            (res) => {
                response.status(200).send(JSON.parse(res));
            })
        .catch(
            (res) => {
                response.status(500).send(JSON.stringify(res.message));
            });
    }

    static interestOverTime(request, response) {
        service.interestOverTime(request.query)
        .then(
            (res) => {
                response.status(200).send(JSON.parse(res));
            })
        .catch(
            (res) => {
                response.status(500).send(JSON.stringify(res.message));
            });
    }

    static realTimeTrends(request, response) {
        service.realTimeTrends(request.query)
        .then(
            (res) => {
                response.status(200).send(JSON.parse(res));
            })
        .catch(
            (res) => {
                response.status(500).send(JSON.stringify(res.message));
            });
    }
}

export default GoogleTrendsController;