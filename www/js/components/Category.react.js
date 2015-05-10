/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var CategoryList = require('../components/CategoryList.react');
var AppList = require('../components/AppList.react');
var ViewConstants = require('../constants/ViewConstants');
var GameActions = require('../actions/GameActions');
var CategoryStore = require('../stores/CategoryStore');
var CategoryDetailStore = require('../stores/CategoryDetailStore');


GameActions.getCategory();

var Category = React.createClass({
    getInitialState: function() {
        return {
            id: 0,
            categoryView: ViewConstants.CATEGORY_VIEW,
            categories: CategoryStore.getCategoryList(),
            gameList: []
        };
    },

    componentDidMount: function() {
        CategoryStore.addChangeListener(this._onChange);
        CategoryDetailStore.addChangeListener(this._onGotoDetail);
    },

    componentWillUnmount: function() {
        CategoryStore.removeChangeListener(this._onChange);
        CategoryDetailStore.removeChangeListener(this._onGotoDetail);
    },

    _onChange: function () {
        this.setState({
            gameList: CategoryDetailStore.getCategoryList()
        });
    },

    _onGotoDetail: function () {
        this.setState({
            gameList: CategoryDetailStore.getGamesByCategory(this.state.id)
        });
    },

    onChangeView: function (view, id) {
        this.setState({
            id: id,
            categoryView: view
        });
        GameActions.getGamesByCategory(id);
    },

    /**
        * @return {object}
    */
    render: function() {
        var self = this;
        var categoryList;
        var categoryContent = null;
        var gameList;

        switch (this.state.categoryView) {
            case ViewConstants.CATEGORY_VIEW:
                categoryList = this.state.categories.map(function (category, index) {
                    return (
                        <CategoryList 
                            key={index}
                            category={category} 
                            index={index} 
                            onChangeView={self.onChangeView}
                        >
                        </CategoryList>
                    );
                });

                categoryContent = <div className="category-list">{categoryList}</div>;
                break;
            case ViewConstants.CATEGORY_DETAIL_VIEW:
                gameList = this.state.gameList.map(function (game, index) {
                    return <AppList item={game} index={index}></AppList>;
                });

                categoryContent = <div className="category-list">{gameList}</div>;
                break;
            default:

        }
        
        return categoryContent;
    }
});

module.exports = Category;
