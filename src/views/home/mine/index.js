import React from 'react'
import './index.scss'
import { Route} from "react-router-dom"
import Personal from "./personal";
import {Information, Tree, Tree1, User} from "./userele";

function Mine() {
    return (
        <div className="mine-box">
            <Personal/>
        </div>
    )
}

export default Mine
