import React, { Component } from 'react'
import './index.scss'
import Home from '../../../../pages/Home'
import Banner from './Banner'


export default class Datails extends Component {
    render() {
        return (

            
            <div className = "details">
                
               <Banner/>
                
               <header>
                <div className='introduction'>
                    <div>                  
                            <span>金钱松</span>
                            <p className = 't'>安徽省九华镇人民政府</p>                         
                    </div>
                    <div>
                    <i className = 'price'>99.90元/棵</i>
                    </div>
                    
                </div>
                <div className='tar'>
                <div>
                        <span>简介</span>
                        <p>位于九华山,金钱松为松科金钱松属下的一个种.别称金松(杭州),水树(浙江湖州).叶片条形,扁平柔软,在长枝上成螺旋状散成,在短枝上15~30枚,向四周辐射平展,秋后变金黄色,圆如铜钱,因此而得名.</p>
                    </div>
                </div>
                        <p className = "lis">---- 树木详细 ----</p>
                </header>
                <Home/>
            </div>
            
            
            
        )
    }
}