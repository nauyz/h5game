/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * This component operates as a "Controller-View".    It listens for changes in
 * the GameStore and passes the new data to its children.
 */

var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var React = require('react');
var GameStore = require('../stores/RecommendStore');

/**
 * Retrieve the current game data from the GameStore
 */
function getGameState() {
    return {
        view: GameStore.getCurView()
    };
}

var GameApp = React.createClass({

    getInitialState: function() {
        return getGameState();
    },

    componentDidMount: function() {
        GameStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        GameStore.removeChangeListener(this._onChange);
    },

    /**
     * @return {object}
     */

    render: function() {
        return (
            <div className="game-app">
                <Header />
                <MainSection view={this.state.view}/>
                <Footer/>
            </div>
        );
    },

    /**
     * Event handler for 'change' events coming from the TodoStore
     */
    _onChange: function() {
        this.setState(getGameState());
    }

});

module.exports = GameApp;
