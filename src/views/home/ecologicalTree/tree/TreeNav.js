import React from 'react'
import TreeBox from './TreeBox'

const TreeNav = props => {
    return (
        <div className="tree-nav">
            <div className="tree-l">
                <div className="shengtai">生态林认养</div>
                <a className="adress">区域
              <i className="fa fa-angle-down"></i>
                </a>
            </div>
            <div className="tree-r">  
                <a className="project">项目介绍<i className="fa fa-angle-right"></i></a>
            </div>
            

        </div>
    )
}
export default TreeNav