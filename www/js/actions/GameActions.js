/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var GameConstants = require('../constants/GameConstants');
var APIService = require('../api/APIService');

var GameActions = {

    /**
     * @param    {string} text
     */
    changeView: function (viewName) {
    	AppDispatcher.dispatch({
    		actionType: GameConstants.GAME_CHANGEVIEW,
    		view: viewName
    	});
    },


    getRecommend: function (start, count) {
    	APIService.getGameRecommend(start, count)
    		.done(function (result) {
    			if(result.status && result.list.length > 0) {
                    AppDispatcher.dispatch({
                        actionType: GameConstants.GAME_RECOMMEND,
                        list: result.list
                    });
                }
    			
    		})
    		.fail(function () {
    			alert('get commendation failed...');
    		});
    },

    getCategory: function () {
        APIService.getGameCategory()
            .done(function (result) {
                if (result.status && result.list.length > 0) {
                    AppDispatcher.dispatch({
                        actionType: GameConstants.GAME_CATEGORY,
                        list: result.list
                    });
                }
            })
            .fail(function () {
                alert('get category failed...');
            });
    }
};

module.exports = GameActions;
