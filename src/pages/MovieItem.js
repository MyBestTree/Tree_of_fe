import React from 'react'



const MovieItem = props => {
  return (
    <ul className='uls'>
    <li>
      <a>
        <div className = 'img-box'>
          <img src ={ props.img.replace('w.h','128.180')}/>
        </div>
        <div className = "text-box">
          <p>{ props.nm }</p>
          
        
          <p>{ props.star }</p>
          <p>{ props.showInfo }</p>
        </div>
        <div className = "btn-box">
          
        </div>
      </a>
    </li>
  </ul>
  )
}

export default MovieItem