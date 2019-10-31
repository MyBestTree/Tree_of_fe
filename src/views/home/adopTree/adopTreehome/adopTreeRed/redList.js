import React from 'react'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

const RedList = props => {
  return (
    <div className='CultureBox'>
      <div className='img-box'>
        <img src='https://c-ssl.duitang.com/uploads/item/201909/16/20190916112101_5xGni.thumb.700_0.jpeg' />
      </div>
      <div className='content'>
        <span className='name'>生态林</span>
        <span className='synopsis'> 生态</span>
        <span className='price'>8888元/年</span>
      </div>
      <div className='btn-box'>
        <Button>我要认养</Button><WhiteSpace />
      </div>
    </div>
  )
}

export default RedList