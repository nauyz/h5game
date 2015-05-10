/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react'); 
var ViewConstants = require('../constants/ViewConstants');

var AppList = React.createClass({
    /**
        * @return {object}
    */
    render: function() {
        var item = this.props.item;
        var index = this.props.item;
        
        return (
           	<div className="app-list" key={item.app_id}>
	            <div className="list-left"><img src={item.icon} /></div>
	            <div className="list-center">
	                <p className="app-title ng-binding">{item.name}</p>
	                <p className="app-desc ng-binding">休闲游戏类&nbsp;&nbsp;{item.download}人添加</p>
	            </div>
	            <div className="list-right">
	                <button className="app-add" onClick="">添加</button>
	            </div>
	        </div>
        );
    }
});

module.exports = AppList;
