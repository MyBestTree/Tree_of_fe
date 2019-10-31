import React, {useState} from 'react';
import {Link, NavLink, Route,BrowserRouter} from "react-router-dom";
import {Tree,Tree1,Money,Usd,User,Cog,Information} from "./userele";

const Personal = props => {
    const [lists] = useState([
        {
            id: 1,
            task: "我的生态公益林",
            icon: 'fa-tree',
            path: '/mine/tree'

        },
        {
            id: 2,
            task: "我的古树名木",
            icon: 'fa-tree',
            path: '/mine/tree1'
        },
        {
            id: 3,
            task: "余额",
            icon: 'fa-money',
            path: '/mine/money'
        },
        {
            id: 4,
            task: "积分",
            icon: 'fa-usd',
            path: '/mine/usd'
        },
        {
            id: 5,
            task: "设置",
            icon: 'fa-cog',
            path: '/mine/cog'
        },
        {
            id: 6,
            task: "在线客服",
            icon: 'fa-user-circle-o',
            path: '/mine/user'
        },
    ])

    function renderList() {
        return lists.map(item => {
            return (
                <li className="user-list" key={item.id}>
                    <NavLink  key={item.id} to={item.path}>
                        <span className={'fa ' + item.icon}></span>
                        <b>{item.task}</b>
                        <i className="fa fa-angle-right"></i>
                    </NavLink>
                </li>
            )

        })
    }

    return (
        <div className="personal-box">
            <div className="user-box">
                <Link to="/list/information">
                    <span className="fa fa-gratipay"></span>
                    <b>个人信息</b>
                    <i className="fa fa-angle-right"></i>
                </Link></div>
            <div>
                <ul>
                    {renderList()}
                </ul>
            </div>
            <BrowserRouter>
                <Route path="/list/tree" component={Tree} exact/>
                <Route path="/list/tree1" component={Tree1}/>
                <Route path="/list/user" component={User}/>
                <Route path="/list/information" component={Information} exact/>
            </BrowserRouter>
        </div>
    );
}


export default Personal;