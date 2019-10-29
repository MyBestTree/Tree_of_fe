import React,{useState  } from 'react'
import { NavLink } from 'react-router-dom';
import './index.scss';

export default function TabBar() {
    const [tabbarList] = useState([  //? tabbar 列表
        {   //* 生态树路由
            id:1,
            className:'fa-home',
            text:'生态树',
            path:'/ecologicaltree'
        },
        {   //* 古树名木..
            id:2,
            className:'fa-home',
            text:'古树名木',
            path:'/famoustree'
        },
        {   //* 特色认养
            id:3,
            className:'fa-home',
            text:'特色认养',
            path:'/adopttree'
        },
        {  //* 我的
            id:4,
            className:'fa-home',
            text:'我的',
            path:'/mine'
        }
    ])


    function renderTabBerItem() {  //? 渲染tabber列表函数
        return tabbarList.map(item => {
            return  (<li key={item.id}>
                <NavLink to={item.path}>
                    <div>
                        <i className={"fa " + item.className}></i>
                    </div>
                    <div>{item.text}</div>
                </NavLink>
            </li> )
        })
    }
    return (
        <article id="tabbar">
            <ul>
                {renderTabBerItem()}
            </ul>
        </article>
    )
}
