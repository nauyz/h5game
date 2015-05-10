/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');

var SubHeader = React.createClass({
    _onBack: function () {
        this.props.onBack();
    },
    /**
     * @return {object}
     */
    render: function() {
        var title = '氢客-' + this.props.title;

        return (
            <header id="subHeader" className="header">
                <div className="left-nav" onClick={this._onBack}>
                    <img src="img/back.png"/>
                </div>
                <h1 className="center-nav">{title}</h1>
                <div className="right-nav"></div>
            </header>
        );
    }
});

module.exports = SubHeader;
