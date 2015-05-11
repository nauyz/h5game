/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var GameActions = require('../actions/GameActions');

var AppDetail = React.createClass({
    _goBack: function () {
        GameActions.deleteApp();
    },
    /**
     * @return {object}
     */
    render: function() {
        var app = this.props.app;
        
        console.log(app);

        return (
            <div className="app-detail">
                <iframe src={app.url} className="app-iframe"></iframe>
                <div className="app-option-list">
                    <div className="app-option" onClick={this._goBack}>返回</div>
                    <div className="app-option">首页</div>
                    <div className="app-option">分享</div>
                    <div className="app-option">更多</div>
                </div>
            </div>
        );
    }
});

module.exports = AppDetail;
