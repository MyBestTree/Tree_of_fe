import React, { Component } from 'react';
import RouterComp from '../router';
import TabBar from '../components/tabBar';

export default class Layout extends Component {
    constructor( props ) {
        super( props )

        this.state = {
            tabbar_flag:true
        }
    }

    render () {
        return (
            <article id="layout">
                <RouterComp></RouterComp>
                <TabBar></TabBar>
            </article>
        )
    }
}
