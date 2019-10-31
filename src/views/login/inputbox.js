import React, {Component} from 'react';
import {InputItem, Button} from 'antd-mobile';


export default class Inputbox extends Component {
    handleClick = () => {
        this.inputRef.focus();
    }

    render() {
        // const { getFieldProps } = this.props.form;
        return (
            <div style={{width:'80%',margin:'0 auto'}}>
                <InputItem
                    type="text"
                    placeholder="请输入账号"
                ><i className="fa fa-id-badge">

                </i></InputItem>
                <InputItem
                    type="phone"
                    placeholder="请输入手机号码"
                ><i className="fa fa-mobile-phone"></i></InputItem>
                <InputItem
                    type="password"
                    placeholder="请输入密码"
                ><i className="fa fa-key"></i></InputItem>
                <Button
                    type="primary"
                    size="small"
                    style={{ background: '#6FCBB1' }}
                >确定</Button>

            </div>
        );
    }
}