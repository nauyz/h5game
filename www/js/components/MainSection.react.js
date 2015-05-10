/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var Dash = require('../components/Dash.react');
var Recommend = require('../components/Recommend.react');
var Category = require('../components/Category.react');
var AppDetail = require('../components/AppDetail.react');
var TodoActions = require('../actions/TodoActions');
var ViewConstants = require('../constants/ViewConstants');
var AppStore = require('../stores/AppStore');

var MainSection = React.createClass({
    getInitialState: function() {
        return {
            app: AppStore.getApp()
        };
    },

    componentDidMount: function() {
        AppStore.addChangeListener(this._onAppChange);
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onAppChange);
    },

    _onAppChange: function () {
        this.setState({
            app: AppStore.getApp()
        });
    },

    // propTypes: {
    //     allTodos: ReactPropTypes.object.isRequired,
    //     areAllComplete: ReactPropTypes.bool.isRequired
    // },

    /**
     * @return {object}
     */
    render: function() {
        var content;
        var app;

        switch (this.props.view) {
            case ViewConstants.DASHBOARD_VIEW:
                content = <Dash />;
                break;
            case ViewConstants.RECOMMEND_VIEW:
                content = <Recommend />;
                break;
            case ViewConstants.CATEGORY_VIEW:
                content = <Category />;
                break;
            default: 
                content = <Dash />;
        }

        if (this.state.app) {
            app = <AppDetail app={this.state.app}></AppDetail>;
        }
        
        return (
            <div>
                <div className="content">
                    {content}
                </div>
                {app}
            </div>
        );
    },

    /**
     * Event handler to mark all TODOs as complete
     */
    _onToggleCompleteAll: function() {
        TodoActions.toggleCompleteAll();
    }

});

module.exports = MainSection;
