import React, { Component } from 'react'
import MovieItem from './MovieItem'
import '../views/home/adopTree/index.scss'
import {Button} from 'antd-mobile'


export default class MovieList extends Component {
  renderItem = () => {
    
    return this.props.data && this.props.data.movieList.map( item => <MovieItem key = { item.id } {...item }/>)
  }
  render() {
    
    return (
      <div className = 'tab-content'>
      <div className = 'page'>
        <div className = 'list-wrap'>
        { this.renderItem() }
      </div>
      </div>
      </div>
    )
  }
  
}
 