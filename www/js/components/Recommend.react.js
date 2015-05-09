/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var Infinite = require('react-infinite');
var InfiniteScroll = require('react-infinite-scroll')(React);
var ScrollLoad = require('react-component-scrollload');
var ViewConstants = require('../constants/ViewConstants')
var GameActions = require('../actions/GameActions');
var RecommendStore = require('../stores/RecommendStore');

var Recommend = React.createClass({
    getInitialState: function() {
        return {
            hasMore: true,
            elements: [],
            isInfiniteLoading: false
        };
    },

    componentDidMount: function() {
        RecommendStore.addLoadRecommendListener(this._loadMore);
        //this._handleInfiniteLoad();
    },

    componentWillUnmount: function() {
        RecommendStore.removeLoadRecommendListener(this._loadMore);
    },

    /**
     * @return {object}
     */
    render: function() {
        var listElements = this.state.elements.map(function(item, i) {
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
        });
        console.log(this.state.elements);

        // return (
        //     <div className="recommend">
        //         <ScrollLoad 
        //             className="via transferPropsTo" 
        //             loadMore={this._handleInfiniteLoad} 
        //             hasMore={true} 
        //             isLoading={this.state.isInfiniteLoading} 
        //             loader={<div className="loading">loading</div>}>
        //             {listElements}
        //         </ScrollLoad>
        //     </div>
        // );        
        // return (
        //     <div className="recommend">
        //         <Infinite 
        //             elementHeight={40}
        //             containerHeight={1000}
        //             onInfiniteLoad={this._handleInfiniteLoad}
        //             loadingSpinnerDelegate={this._isLoading()}
        //             isInfiniteLoading={this.state.isInfiniteLoading}
        //             timeScrollStateLastsForAfterUserScrolls={150}
        //         >   
        //             {listElements}
        //         </Infinite>
        //     </div>
            
        // );
        return (
            <div className="recommend">
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this._handleInfiniteLoad}
                    hasMore={this.state.hasMore}
                    loader={<div className="loader">Loading ...</div>}>
                    {listElements} 
                </InfiniteScroll>
            </div>
        );
    },

    //加载提示信息
    _isLoading: function () {
        return (
            <div className="infinite-list-item">
                Loading...
            </div>
        );
    },

    //请求加载到的数据
    _handleInfiniteLoad: function (page) {
        var self= this;
        var start = this.state.elements.length;
        var pageSize = 40;

        console.log(this.state.hasMore);
        self.setState({
            hasMore: false,
            isInfiniteLoading: true
        });

        GameActions.getRecommend(start, pageSize);
        
    },

    //处理加载数据
    _loadMore: function () {
        var self = this;
        var newList = RecommendStore.getCurRecommendList();        

        if (self.state.elements.length < 200) {
            self.setState({
                hasMore: true,
                isInfiniteLoading: false,
                elements: self.state.elements.concat(newList)
            });
        }
        


    },

    _buildList: function(start, end) {
        var elements = [];
        for (var i = start; i < end; i++) {
            elements.push(<ListItem key={i}/>)
        }
        return elements;
    }
});

module.exports = Recommend;
