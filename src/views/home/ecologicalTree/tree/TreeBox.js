import React,{useEffect} from 'react';
import TreeList from './TreeList';
import Bscroll from 'better-scroll'
const  TreeBox = props =>{
 useEffect(()=>{
     new Bscroll(document.querySelector('.tree-box'),{
      click: true
 })
})
    return(
        <div className="tree-box">
            <TreeList/>
        </div>
    )
}
export default TreeBox