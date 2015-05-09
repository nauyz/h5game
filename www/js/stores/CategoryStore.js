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

var _categories = [];

var CategoryStore = assign({}, EventEmitter.prototype, {

  getCategoryList: function () {
    return _categories;
  },

  updateCategoryList: function (list) {
    _categories = list;
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

});

module.exports = CategoryStore;
