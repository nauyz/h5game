/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * AppDispatcher
 *
 * A singleton that operates as the central hub for application updates.
 */

var RecommendStore = require('../stores/RecommendStore');
var CategoryStore = require('../stores/CategoryStore');
var CategoryDetailStore = require('../stores/CategoryDetailStore');
var AppStore = require('../stores/AppStore');
var GameConstants = require('../constants/GameConstants')
var Dispatcher = require('flux').Dispatcher;

// Register callback to handle all updates
var AppDispatcher = new Dispatcher();
AppDispatcher.register(function(action) {
    var view, list;

    switch(action.actionType) {
        case GameConstants.GAME_CHANGEVIEW:
            view = action.view.trim();
            if (view !== '') {
            	RecommendStore.setCurView(view);
                RecommendStore.emitChange();
            }
            break;
        case GameConstants.GAME_DETAIL:
            var app = action.app;
            AppStore.updateApp(app);
            AppStore.emitChange();
            break;
        case GameConstants.GAME_RECOMMEND:
            list = action.list;
            RecommendStore.updateRecommendList(list);
            RecommendStore.emitLoadRecommend();
            break;
        case GameConstants.GAME_CATEGORY:
            list = action.list;
            CategoryStore.updateCategoryList(list);
            CategoryStore.emitChange();
            break;
        case GameConstants.GAME_CATEGORY_DETAIL:
            list = action.list;
            CategoryDetailStore.updateGamesByCategory(list);
            CategoryDetailStore.emitChange();
            break;
        default:
            // no op
    }
});

module.exports = AppDispatcher;
