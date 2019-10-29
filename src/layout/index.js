import React, { Component } from 'react';
import RouterComp from '../router';
import TabBar from '../components/tabBar';

import './index.scss';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
// import { increment } from '../actions';

export default class Layout extends Component {
    constructor( props ) {
        super( props )

        this.state = {
            tabbar_flag:true,

        }
    }

    render () {
        return (
            <article id="layout">
                <article id="main-container">
                    <RouterComp></RouterComp>
                </article>
                <TabBar></TabBar>
            </article>
        )
    }
}
