var $ = require('jquery');

var serviceUrl = 'http://ysp-appstore.chinacloudapp.cn:8080';
var servicePath = {
	recommendation: '/appstore/category'
};

var APIService = {
	//get recommendation list by start and count 
	getGameRecommend: function (start, count) {
		var deferred = $.Deferred();

        // $.ajax({
        //     type: 'POST',
        //     url: APIBaseUrl + APIJobPath,
        //     data: 'start=' + start + '&end=' + end + '&idList=%5B' + collegeIds + '%5D',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        //     success: function (data) {
        //         deferred.resolve(data);
        //     },
        //     error: function (error) {
        //         deferred.reject(status);
        //     }
        // });
		$.ajax({
            type: 'get',
            url: serviceUrl + servicePath.recommendation + '?category_id=1&count=' + count + '&start=' + start,
            success: function (data) {
                deferred.resolve(data);
            },
            error: function (error) {
                deferred.reject(status);
            }
        });
        return deferred.promise();
    }
};

module.exports = APIService;