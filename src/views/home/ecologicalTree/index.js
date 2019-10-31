import React from 'react'
import Banner from './Banner'
import './index.scss'
import TreeContainer from './tree'
const  EcologicalTree = props => {
   
        return (
            <div className="EcologicalTree-box">
               <Banner></Banner>
               <TreeContainer/>
            </div>
        )
    
}
export default  EcologicalTree