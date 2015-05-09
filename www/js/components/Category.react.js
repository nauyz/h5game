/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var ViewConstants = require('../constants/ViewConstants')
var GameActions = require('../actions/GameActions');
var CategoryStore = require('../stores/CategoryStore');


GameActions.getCategory();

var Category = React.createClass({
    getInitialState: function() {
        return {
            categories: CategoryStore.getCategoryList()
        };
    },

    componentDidMount: function() {
        CategoryStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        CategoryStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({
            categories: CategoryStore.getCategoryList()
        });
    },

    /**
        * @return {object}
    */
    render: function() {
        var categoryList = this.state.categories.map(function (category, index) {
            var games = category.apps;
            var gameList = games.map(function (game, index) {
                return (
                    <div className="app-list game-app-list">
                        <div className="list-left">
                            <span className="ng-binding">{index + 1}</span>
                            <img src={game.icon} />
                        </div>
                        <div className="list-center">
                            <p className="app-title ng-binding">{game.name}</p>
                            <p className="app-desc ng-binding">{category.name}类&nbsp;&nbsp;{game.download}人添加</p>
                        </div>
                        <div className="list-right">
                        </div>
                    </div>
                );
            });
            return (
                <div className="game-card">
                    <div className="game-title">
                        <p className="ng-binding">{category.name}<a ng-href="#/game/detail?index=0" href="#/game/detail?index=0">查看全部&gt;&gt;</a></p>
                    </div>
                    {gameList}
                </div>
            );
        });
        return (
            <div className="category-list">{categoryList}</div>
        );
    }
});

module.exports = Category;
