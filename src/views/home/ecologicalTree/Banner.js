import React, { Component } from 'react'

import { Carousel, WingBlank } from 'antd-mobile';
import { red } from 'ansi-colors';

export default class Banner  extends React.Component {
  state = {
    data: ['1', '2', '3','4','5'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return (
     
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
          dotStyle={{
              background:'gray',
               width:'.1rem',
               height:'.03rem',
              borderRadius:'0',
             
          }}
          dotActiveStyle ={{
            background:'white',
            borderRadius:'0',
            width:'.1rem',
            height:'.03rem',
          }}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
     
    );
  }
}

