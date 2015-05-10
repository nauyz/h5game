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

var CategoryList = React.createClass({
    /**
        * @return {object}
    */
    _onGotoCategory: function () {
        this.props.onChangeView(ViewConstants.CATEGORY_DETAIL_VIEW, this.props.category.id);
    },

    render: function() {
        var category = this.props.category;
        var index = this.props.index;

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
                    <p className="ng-binding">
                        {category.name}
                        <a onClick={this._onGotoCategory}>查看全部&gt;&gt;</a>
                    </p>
                </div>
                {gameList}
            </div>
        );
    }
});

module.exports = CategoryList;
