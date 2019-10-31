import React, { Component } from 'react';
import request from '../../../../utils/request';
import { Button } from 'antd-mobile';
import { list } from 'postcss';
import {Link} from 'react-router-dom'

class TreeList extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            trees:[]
        }
    }
    // const [trees, setTrees] = useState([])
    async componentDidMount(){
        const result = await request({
            url: "/mock/index.json"
        })
        // console.log('result', result)
        this.setState({
            trees:result.data.treeData.wg.data
            
        })
    }

     renderTrees = () =>{
     const {trees} =this.state
     console.log(trees)
     return trees.length!=0 && trees.map(item =>{
         return(
            <li key={item.tree_id}>
            <Link to ="/dingdan">
                <div className ="img-box">
                    <img src={item.tree_img}/>
                </div>
                <div className ="text-box">
                    <p style={{fontWeight:"bold"}}>{item.tree_name}</p>
                    <p style={{color:"#ccc",fontSize:".10rem"}}>作用：{item.tree_feature}</p>
                    <p style= {{color:"red",fontSize:".10rem"}}>价格：{item.tree_price}/棵</p>
                </div>
                <div className ="btn-box">
                    <Button type="primary">我要认养</Button>
                </div>
            </Link>
        </li>
         )
     })
    }


    render() {
        return (
            <ul>
                 {this.renderTrees()}
            </ul>
        )
    }
}
export default TreeList