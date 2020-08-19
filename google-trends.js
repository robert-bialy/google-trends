const googleTrends = require('google-trends-api');

var getDailyTrends = async function getDailyTrends(queryS) {
    if (!queryS.geo) queryS.geo = "US";
    if (queryS.trendDate) queryS.trendDate = new Date();
    let query = {
        geo: queryS.geo,
        trendDate: queryS.trendDate
    };
    
    if (queryS.timezone) query.timezone = queryS.timezone;
    if (queryS.hl) query.hl = queryS.hl;
    
    var response = googleTrends.dailyTrends(query);
    return response;
}

var interestOverTime = async function interestOverTime(q) {
    let query = {
        keyword = q.keyword,
        startTime = q.startTime,
        endTime = q.endTime,
        geo = q.geo,
        hl = q.hl,
        timezone = q.timezone,
        category = q.category,
        granularTimeResolution = q.granularTimeResolution
    };

    var response = googleTrends.interestOverTime(query);
    return response;
}

module.exports = {
    getDailyTrends: getDailyTrends,
    interestOverTime: interestOverTime
};