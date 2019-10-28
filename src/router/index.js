// import React, { useState } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';
// import Home from '../views/home';
// import Category from '../views/category';
// import Shopcar from '../views/shopcar';
// import Mine from '../views/mine';
// import List from '../views/list';
// import Detail from '../views/detail';
// import Login from '../views/login';

// function RouterComp () {
//     const [ routes ] = useState( [
//         {
//             id: 1,
//             path: '/home',
//             component: Home
//         },
//         {
//             id: 2,
//             path: '/category/:id',  //todo 定位
//             component: Category
//         },
//         {
//             id: 3,
//             path: '/shopcar',
//             component: Shopcar
//         },
//         {
//             id: 4,
//             path: '/mine',
//             component: Mine
//         },
//         {
//             id: 5,
//             path: '/list',
//             component: List
//         },
//         {
//             id: 6,
//             path: '/detail',
//             component: Detail
//         },
//         {
//             id: 7,
//             path: '/login',
//             component: Login
//         },
//     ] )

//     function renderRoutes () {
//         return routes.map( item => (
//             <Route
//                 key={item.id}  
//                 path={item.path}
//                 component={item.component}
//                 exact={item.exact}
//             >
//             </Route>
//         ) )
//     }
//     return (
//         //* Route是一个路由展示组件，通过component属性来确定渲染哪一个组件
//         //* Switch组件一次只渲染一个Route
//         // * 可以实现类似按需加载组件的作用，可以起到一定的性能优化作用
//         //* exact 是路由完全匹配
//         //* Redirect 是重定向组件  from 来源  to 目标     /  /home 
//         // <BrowserRouter>
//             <Switch>
//                 <Redirect from="/" to="/home" exact ></Redirect>
//                 {renderRoutes()}


//                 {/* <Router path="/home" component={Home} exact=></Router> */}
//             </Switch>
//         //{/* </BrowserRouter> */}
//         // <Home></Home>
//     )
// }

// export default RouterComp