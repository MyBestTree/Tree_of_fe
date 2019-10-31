import React from 'react'
import { Button } from 'antd-mobile';
const Treeltem =props =>{
    return(
        <li>
        <a>
            <div className ="img-box">
                <img src="https://p0.meituan.net/128.180/movie/7b437e3a0d08d10e374ddc34f71b88fe3379132.jpg"/>
            </div>
            <div className ="text-box">
                <p>安徽松树</p>
                <p>累计认养</p>
                <p>30.00/棵</p>
            </div>
            <div className ="btn-box">
                <Button type="primary">我要认养</Button>
            </div>
        </a>
    </li>
    )
}
export default Treeltem