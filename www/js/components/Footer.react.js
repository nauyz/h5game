/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var ViewConstants = require('../constants/ViewConstants')
var GameActions = require('../actions/GameActions');

var Footer = React.createClass({
    /**
     * @return {object}
     */
    render: function() {
    	return (
            <footer id="footer" className="footer">
                <div className="footer-nav-bar" onClick={this._onChangeView.bind(this, ViewConstants.DASHBOARD_VIEW)}>
                    <p>桌面</p>
                </div>
                <div className="footer-nav-bar" onClick={this._onChangeView.bind(this, ViewConstants.RECOMMEND_VIEW)}>
                    <p>推荐</p>
                </div>
                <div className="footer-nav-bar" onClick={this._onChangeView.bind(this, ViewConstants.CATEGORY_VIEW)}>
                    <p>分类</p>
                </div>
                <div className="footer-nav-bar" onClick={this._onChangeView.bind(this, ViewConstants.SETTING_VIEW)}>
                    <p>设置</p>
                </div>
            </footer>
        );
    },

    /**
     * Event handler to change view
     */
     _onChangeView: function (view) {
        GameActions.changeView(view);
    },
});

module.exports = Footer;
