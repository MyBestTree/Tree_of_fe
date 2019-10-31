import React,{ Component } from 'react' 
import { Carousel, WingBlank } from 'antd-mobile';


export default class Banner extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572454991716&di=3d0df2a10a4a38dad5636d6c05c36f5b&imgtype=0&src=http%3A%2F%2Fimg2.jqw.com%2F2013%2F12%2F06%2F1338612%2Fproduct%2Fb201312301337429234.jpg',
        'http://a0.att.hudong.com/15/86/01300000164646122351863169020_s.jpg',
        'http://img1.imgtn.bdimg.com/it/u=2403228435,2669032376&fm=26&gp=0.jpg',
        'http://pic.npicp.com/picture/zhou2001/1818166201721282544.jpg',
        'http://img1.mmfj.com/upload/uploaD/proDucT/2016/10/25/15/200992941235241.jpg'
    ],
      });
    }, 100);
  }
  render() {
    return (
      
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
             
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
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

