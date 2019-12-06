import React from 'react';
import "antd/dist/antd.css";
import { Input, Button, List  } from 'antd';

// 使用无状态组件,提高效率
const TodoListUI = function (props) {
    return (
        <div>
            <Input onChange={props.changeInputVlaue} placeholder="请输入" style={{ width: '200px' }} value={props.inputValue} />
            <Button type="primary" onClick={props.clickBtn}>增加</Button>
            <div style={{ width: '300px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={
                            () => { props.deleteItem(index) }
                        }>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default TodoListUI;

// class TodoListUI extends Component {
//     render() { 
//         return ( 
//             <div>
//                 <Input onChange={this.props.changeInputVlaue} placeholder="请输入" style={{ width: '200px' }} value={this.props.inputValue}/>
//                 <Button type="primary" onClick={this.props.clickBtn}>增加</Button>
//                 <div style={{width:'300px'}}>
//                     <List
                        
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item,index) => (
//                             <List.Item onClick={
//                                 ()=>{this.props.deleteItem(index)}
//                                 }>
//                                 {item}
//                             </List.Item>
//                         )}
//                     />
//                 </div>
//             </div>
//          );
//     }
// }
 
// export default TodoListUI;