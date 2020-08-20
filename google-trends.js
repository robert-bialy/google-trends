const googleTrends = require('google-trends-api');

var getDailyTrends = async function getDailyTrends(q) {
    let query = {
        geo: q.geo,
        trendDate: q.trendDate,
        timezone: q.timezone,
        hl: q.hl
    };
    
    var response = googleTrends.dailyTrends(query);
    return response;
}

var interestOverTime = async function interestOverTime(q) {
    let query = {
        keyword: q.keyword,
        startTime: q.startTime,
        endTime: q.endTime,
        geo: q.geo,
        hl: q.hl,
        timezone: q.timezone,
        category: q.category,
        granularTimeResolution: q.granularTimeResolution
    };

    var response = googleTrends.interestOverTime(query);
    return response;
}

var realTimeTrends = async function realTimeTrends(q) {
    let query = {
        geo: q.geo,
        hl: q.hl,
        timezone: q.timezone,
        category: q.category // All : 'all' Entertainment: 'e' Business : 'b' Science/Tech : 't' Health : 'm' Sports : 's' Top Stories : 'h'
    };

    var response = googleTrends.realTimeTrends(query);
    return response;
}

module.exports = {
    getDailyTrends: getDailyTrends,
    interestOverTime: interestOverTime,
    realTimeTrends: realTimeTrends
};