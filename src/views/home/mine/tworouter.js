import React, from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import {Information, Tree, Tree1, User} from "./userele";

const Tworouter=props=>{
        return (
            <div>
                <BrowserRouter>
                    <Route path="/list/tree" component={Tree} exact/>
                    <Route path="/list/tree1" component={Tree1}/>
                    <Route path="/list/user" component={User}/>
                    <Route path="/list/information" component={Information} exact/>
                </BrowserRouter>
            </div>
        );
}

export default Tworouter;