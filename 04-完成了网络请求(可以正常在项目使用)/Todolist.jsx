// 优化版(已去除注释)
import React, { Component } from 'react';
import TodoListUI from './TodoListUI'
import store from './store/index';
import { changeInputAction, addItemAction, deleteItemAction,getListAction } from './store/actionCreators';
import axios from 'axios';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        store.subscribe(this.storeChange);//这里要记住,这是订阅redux的状态,特别重要
    }
    storeChange = () => {
        this.setState(store.getState())
    }
    changeInputVlaue = (e) => {
        const action = changeInputAction(e.target.value)
        store.dispatch(action);
    }
    clickBtn = () => {
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem = (value) => {
        const action = deleteItemAction(value)
        store.dispatch(action)
    }
    getData=()=>{
               // 这里请求接口数据
               axios.get(' https://www.easy-mock.com/mock/5d09c84de0b02639f37c9e4c/example').then(res => {
                console.log(res.data);
                let data=res.data
                // 把数据用store.dispatch()传给store
                const action=getListAction(data)
                store.dispatch(action)
    
            })
    }
    componentDidMount() {
        // this.getData()//获取easy-mock数据
        
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputVlaue={this.changeInputVlaue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />
        );
    }
}
export default TodoList;





// 原来的部分
// import React, { Component } from 'react';
// // import "antd/dist/antd.css";
// // import { Input, Button, List  } from 'antd';//已经将ui分离
// import TodoListUI from './TodoListUI'
// import store from './store/index';
// // import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './store/actionType'
// import {changeInputAction,addItemAction,deleteItemAction} from './store/actionCreators'

// class TodoList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = store.getState()//store中有一个getState方法可以获取仓库中的数据

//         /* 下面是将reducer新值关联到组件,使组件发生变更:关键代码2步,这两部执行完后发现components和store的数据就保持一致了.
//         订阅过程:store调用subscribe方法,里面传递一个方法,在方法里用setState方法调用store.getState()即可
//         */
//         // 关键代码1开始
//         this.storeChange=this.storeChange.bind(this);
//         this.changeInputVlaue=this.changeInputVlaue.bind(this)
//         this.deleteItem=this.deleteItem.bind(this);
//         store.subscribe(this.storeChange);//这里要记住,这是订阅redux的状态,特别重要
//         // store.subscribe(this.storeChange.bind(this));//可以简写
//         // 关键代码1结束
//     }


//      // 关键代码2开始
//      storeChange(){
//          this.setState(store.getState())
//      }
//      // 关键代码2结束

//     changeInputVlaue(e){
//         // console.log(e.target.value);
//         // const action={
//         //     type:CHANGE_INPUT,
//         //     // type:'change_input_value',
//         //     value:e.target.value
//         // }
//         // 采用新方法
//         const action =changeInputAction(e.target.value)
//         store.dispatch(action);

//     }
//     clickBtn(){
//         // const action={
//         //     type:ADD_ITEM
//         //     // type:'addItem'

//         // }
//         // 使用新方法
//         const action =addItemAction()
//         store.dispatch(action)
//     }
//     deleteItem(value){
//         // console.log(value);
//         // const action={
//         //     type:DELETE_ITEM,
//         //     // type:"deleteItem",
//         //     item:value
//         // }
//         // 使用新方法
//         const action =deleteItemAction(value)
//         store.dispatch(action)
//     }
//     render() {
//         return (
//             <TodoListUI 
//                 inputValue={this.state.inputValue}
//                 list={this.state.list}
//                 changeInputVlaue={this.changeInputVlaue}
//                 clickBtn={this.clickBtn}
//                 deleteItem={this.deleteItem}
//             />
//         );
//     }
// }

// export default TodoList;

