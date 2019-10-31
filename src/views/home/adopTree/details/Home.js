import React, { Component } from 'react'
import MovieList from './MovieList'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import '../../adopTree/details/index.scss'
import BScroll from 'better-scroll'
import { getMovies } from './../../../../actions/index';

class Home extends Component {
  
  componentDidMount() {
    this.props.getMovies()
    new BScroll('.page')
  }
  render() {
    
    const { data } = this.props
    return (
      <div className = "home-box" >
      
        <MovieList data = { data }/>
      </div>
    )
  }
}


const mapStateFromProps = state => {
  return {
    data: state.home.data 
  }
}

const mapDispatchFromProps = dispatch => {
  return bindActionCreators({getMovies},dispatch)
}


export default  connect(mapStateFromProps,mapDispatchFromProps )( Home )
