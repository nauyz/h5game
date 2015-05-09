/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoStore
 */

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ViewConstants = require('../constants/ViewConstants');

var CHANGE_EVENT = 'change';
var LOAD_RECOMMEND_EVENT = 'loadRecommend';

var _curView = ViewConstants.DASHBOARD_VIEW;
var _recommendList = [];
var _curRecommendList = [];

var GameStore = assign({}, EventEmitter.prototype, {

  getCurView: function () {
  	return _curView;
  },

  setCurView: function (view) {
  	_curView = view;

  	return true;
  },

  getRecommendList: function () {
    return _recommendList;
  },

  getCurRecommendList: function () {
    return _curRecommendList;
  },

  updateRecommendList: function (list) {
    _curRecommendList = list;
    _recommendList = _recommendList.concat(list);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  //加载推荐
  emitLoadRecommend: function () {
    this.emit(LOAD_RECOMMEND_EVENT);
  },

  addLoadRecommendListener: function (callback) {
    this.on(LOAD_RECOMMEND_EVENT, callback);
  },

  removeLoadRecommendListener: function (callback) {
    this.removeListener(LOAD_RECOMMEND_EVENT, callback);
  }
});

module.exports = GameStore;
