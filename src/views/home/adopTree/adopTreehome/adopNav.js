import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const AdopNav = props => {
  return (
    <Fragment>
      <div className='yl'></div>
      <div id='adopnav'>
        <NavLink to='/adopttree/culture'>文化认养</NavLink>
        <NavLink to='/adopttree/red'>红色认养</NavLink>
      </div>
    </Fragment>
  )
}
export default AdopNav