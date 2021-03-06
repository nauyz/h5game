/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * GameConstants
 */

var keyMirror = require('keymirror');

module.exports = keyMirror({
	GAME_CHANGEVIEW: null,
	GAME_DETAIL: null, 	//app详情页面
	GAME_DETAIL_REMOVE: null, //删除当前app
	GAME_RECOMMEND: null,
    GAME_CATEGORY: null,
    GAME_CATEGORY_DETAIL: null
});
