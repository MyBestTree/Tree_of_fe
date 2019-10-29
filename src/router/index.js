import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdoptTree from '../views/home/adopTree';
import EcologicalTree from '../views/home/ecologicalTree';
import FamousTree from '../views/home/famousTree';
import Mine from '../views/home/mine';
import Login from '../views/login';
import Register from '../views/register';
import Error from '../views/error';


function RouterComp () {
    const [ routes ] = useState( [
        {  //* 特色认养路由
            id: 1,
            path: '/adopttree',
            component: AdoptTree
        },
        {  //* 生态树路由
            id: 2,
            path: '/ecologicaltree',
            component: EcologicalTree
        },
        {  //* 古树名木
            id: 3,
            path: '/famoustree',
            component: FamousTree
        },
        {  //* 我的
            id: 4,
            path: '/mine',
            component: Mine
        },
        {  //* 登陆路由
            id: 5,
            path: '/login',
            component: Login
        },
        {  //* 注册
            id: 6,
            path: '/register',
            component: Register
        },
        {  //* 错误路由
            id: 7,
            path: '',
            component: Error
        },
    ] )

    function renderRoutes () {
        return routes.map( item => (
            <Route
                key={item.id}  
                path={item.path}
                component={item.component}
                exact={item.exact}
            >
            </Route>
        ) )
    }
    return (
        //* Route是一个路由展示组件，通过component属性来确定渲染哪一个组件
        //* Switch组件一次只渲染一个Route
        // * 可以实现类似按需加载组件的作用，可以起到一定的性能优化作用
        //* exact 是路由完全匹配
        //* Redirect 是重定向组件  from 来源  to 目标     /  /home 
        // <BrowserRouter>
            <Switch>
                <Redirect from="/" to="/ecologicaltree" exact ></Redirect>
                {renderRoutes()}


                {/* <Router path="/home" component={Home} exact=></Router> */}
            </Switch>
        //{/* </BrowserRouter> */}
        // <Home></Home>
    )
}

export default RouterComp