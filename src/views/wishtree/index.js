import React, { Component } from 'react'
import './index.scss'

export default class WishTree extends Component {
    render() {
        return (
            <div className = "tree">
                {/* 背景图 */}
                <img src = {[require("../../../src/assets/img/xuyuanshu.png")]}>
               
                </img>
                <a className = 'welfare_forest'>
                    <img src = {[require("../../../src/assets/img/ic_ecology.png")]}></img>
                </a>
                
                   
                
            <div className ='footer'>
               
                    <img src = {[require("../../../src/assets/img/ic_diary.png")]}></img>
                        <img src = {[require("../../../src/assets/img/ic_sign.png")]}></img>
                
                {/* 许愿 */}
                <a>
                    <img src = {[require("../../../src/assets/img/ic_vow.png")]}></img>
                </a>
                </div>
                
                
                
            </div>
        )
    }
}
