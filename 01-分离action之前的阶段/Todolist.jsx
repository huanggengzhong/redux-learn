import React, { Component } from 'react';
import "antd/dist/antd.css";
import { Input, Button, List  } from 'antd';
import store from './store/index';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()//store中有一个getState方法可以获取仓库中的数据

        /* 下面是将reducer新值关联到组件,使组件发生变更:关键代码2步,这两部执行完后发现components和store的数据就保持一致了.
        订阅过程:store调用subscribe方法,里面传递一个方法,在方法里用setState方法调用store.getState()即可
        */
        // 关键代码1开始
        this.storeChange=this.storeChange.bind(this);
        store.subscribe(this.storeChange);//这里要记住,这是订阅redux的状态,特别重要
        // store.subscribe(this.storeChange.bind(this));//可以简写
        // 关键代码1结束
    }


     // 关键代码2开始
     storeChange(){
         this.setState(store.getState())
     }
     // 关键代码2结束
    
    changeInputVlaue(e){
        console.log(e.target.value);
        const action={
            type:'change_input_value',
            value:e.target.value
        }
        store.dispatch(action);
        
    }
    clickBtn(){
        const action={
            type:'addItem'

        }
        store.dispatch(action)
    }
    deleteItem(value){
        // console.log(value);
        const action={
            type:"deleteItem",
            item:value
        }
        store.dispatch(action)
    }
    render() {
        return (
            <div>
                <Input onChange={this.changeInputVlaue.bind(this)} placeholder="请输入" style={{ width: '200px' }} value={this.state.inputValue}/>
                <Button type="primary" onClick={this.clickBtn.bind(this)}>增加</Button>
                <div style={{width:'300px'}}>
                    <List
                        
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index) => (
                            <List.Item onClick={this.deleteItem.bind(this,index)}>
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default TodoList;