var $ = require('jquery');

var serviceUrl = 'http://ysp-appstore.chinacloudapp.cn:8080';
var servicePath = {
	recommendation: '/appstore/category',
    category: '/appstore/catalog/game',
    gameByCategory: '/appstore/category'
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
    },

    //获取游戏分类列表
    getGameCategory: function () {
        var deferred = $.Deferred();

        $.ajax({
            url: serviceUrl + servicePath.category,
            type: 'get'
        })
        .done(function(data) {
            console.log("success");
            deferred.resolve(data);
        })
        .fail(function(error) {
            console.log("error");
            deferred.reject(0);
        })
        .always(function() {
            console.log("complete");
        });
        
        return deferred.promise();   
    },

    //根据分类获取游戏列表
    getGamesByCategory: function (id) {
        var deferred = $.Deferred();

        $.ajax({
            url: serviceUrl + servicePath.gameByCategory + '?category_id=' + id,
            type: 'get'
        })
        .done(function(data) {
            console.log("success");
            deferred.resolve(data);
        })
        .fail(function(error) {
            console.log("error");
            deferred.reject(0);
        })
        .always(function() {
            console.log("complete");
        });
        
        return deferred.promise();   
    }
};

module.exports = APIService;