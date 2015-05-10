/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');

var AppDetail = React.createClass({
    /**
     * @return {object}
     */
    render: function() {
        var app = this.props.app;
        
        console.log(app);

        return (
            <div className="app-detail">
                <iframe src={app.url} className="app-iframe"></iframe>
                <div className=""></div>
            </div>
        );
    }
});

module.exports = AppDetail;
