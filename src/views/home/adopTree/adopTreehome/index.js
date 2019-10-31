import React,{Fragment} from 'react'
import AdopNav from './adopNav'
import AdopTreeBanner from './adopTreeBanner'
import './index.scss'
import {Route} from 'react-router-dom'
import CultureBox from './adopTreeCulture/CultureBox'
import RedBox from './adopTreeRed/RedBox'
import PickerViewExample from './location'

const AdopTree =props =>{
    return (
        <Fragment> 
        <AdopNav/>
        <AdopTreeBanner/>
        <PickerViewExample/>
        <Route path='/adopttree/culture' component={CultureBox} />
        <Route path='/adopttree/red' component={RedBox}/>
        </Fragment>
       
    )  
}
export default AdopTree