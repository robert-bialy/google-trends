var mapGetDailyTrends = function mapGetDailyTrends(dailyTrends) {
    return dailyTrends.map(s => 
        ({ 
            date: s.date,
            trendingSearches: s.trendingSearches.map(i => mapTrendingSearches(i))
        }));
}

var mapInterestOverTime = function interestOverTime(timeLineData) {
    return timeLineData.map(i => 
        ({
            time: i.time,
            formattedTime: i.formattedTime,
            value: i.value
        }));
}

function mapTrendingSearches(item) {
    return ({
        title: item.title,
        image: item.image,
        articles: item.articles.map(i => mapArticles(i)),
        shareUrl: item.shareUrl
    });
}

function mapArticles(item) {
    return ({
        title: item.title,
        url: item.url
    });
}

module.exports = {
    mapGetDailyTrends: mapGetDailyTrends,
    mapInterestOverTime: mapInterestOverTime
};