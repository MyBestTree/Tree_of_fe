import React,{Fragment} from 'react';
import TreeNav from './TreeNav';
import TreeBox from './TreeBox';
const TreeContainer = props =>{
    return(
        <Fragment>
        <TreeNav/>
        <TreeBox/>
        </Fragment>
    )
}
export default TreeContainer