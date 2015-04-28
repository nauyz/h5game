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

var GameStore = require('../stores/GameStore');
var GameConstants = require('../constants/GameConstants')
var Dispatcher = require('flux').Dispatcher;

// Register callback to handle all updates
var AppDispatcher = new Dispatcher();
AppDispatcher.register(function(action) {
    var view;

    switch(action.actionType) {
        case GameConstants.GAME_CHANGEVIEW:
            view = action.view.trim();
            if (view !== '') {
            	GameStore.setCurView(view);
                GameStore.emitChange();
            }
            break;
        case GameConstants.GAME_RECOMMEND:
            list = action.list;
            GameStore.updateRecommendList(list);
            GameStore.emitLoadRecommend();
            break;
        default:
            // no op
    }
});

module.exports = AppDispatcher;
