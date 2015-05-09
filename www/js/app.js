/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');

var GameApp = require('./components/GameApp.react');

//初始化数据，通过action进行获取

React.render(
  <GameApp />,
  document.getElementById('h5game')
);
