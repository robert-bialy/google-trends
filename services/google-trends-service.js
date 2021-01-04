const googleTrends = require('google-trends-api');
const mapper = require('./mapper')

var getDailyTrends = async function getDailyTrends(q) {
    let query = {
        geo: q.geo,
        trendDate: q.trendDate,
        timezone: q.timezone,
        hl: q.hl
    };
    
    var response = await googleTrends.dailyTrends(query);
    var json = JSON.parse(response);

    return mapper.mapGetDailyTrends(json.default.trendingSearchesDays);
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

    var response = await googleTrends.interestOverTime(query);
    var json = JSON.parse(response);

    return mapper.mapInterestOverTime(json.default.timelineData);
}

var realTimeTrends = async function realTimeTrends(q) {
    let query = {
        geo: q.geo,
        hl: q.hl,
        timezone: q.timezone,
        category: q.category // All : 'all' Entertainment: 'e' Business : 'b' Science/Tech : 't' Health : 'm' Sports : 's' Top Stories : 'h'
    };

    var response = await googleTrends.realTimeTrends(query);
    var json = JSON.parse(response);

    return json;
}

module.exports = {
    getDailyTrends: getDailyTrends,
    interestOverTime: interestOverTime,
    realTimeTrends: realTimeTrends
};