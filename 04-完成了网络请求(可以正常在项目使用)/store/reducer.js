// 优化版
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM ,GET_LIST} from './actionType'
const defaultState = {
    inputValue: "",
    list: [
        '早8点开晨会，分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚5:30对今日代码进行review'
    ]
};
export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))//拷贝state
    switch (action.type) {
        case CHANGE_INPUT:

            newState.inputValue = action.value;
            return newState;
            break;
        case ADD_ITEM:

            newState.list.push(state.inputValue)
            newState.inputValue = ''
            return newState
            break;
        case DELETE_ITEM:
            newState.list.splice(action.item, 1)
            return newState
            break;
        case GET_LIST:
            newState.list=action.data.data.list//得到网络的新数据
        default:
            return state;
    }

}

/* 
特别说明:
Reudcer只是返回了更改的数据，但是并没有更改store中的数据，store拿到了Reducer的数据，自己对自己进行了更新。
*/
// import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionType'

// const defaultState = {
//     inputValue: "",
//     list: [
//         '早8点开晨会，分配今天的开发工作',
//         '早9点和项目经理作开发需求讨论会',
//         '晚5:30对今日代码进行review'
//     ]
// };


// export default (state = defaultState, action) => {
//     // console.log(state);
//     // console.log(action);
//     /* 
//     state: 指的是原始仓库里的状态。
//     action: 指的是action新传递的状态。
//     */
//     // if (action.type === "change_input_value") {
//     //     let newState = JSON.parse(JSON.stringify(state))//拷贝state
//     //     newState.inputValue = action.value;
//     //     return newState;
//     // } else if (action.type === "addItem") {
//     //     let newState = JSON.parse(JSON.stringify(state))//拷贝
//     //     newState.list.push(state.inputValue)//将输入框内容再加一个给list
//     //     newState.inputValue = ''//加完以后清除
//     //     return newState

//     // }
//     //  else if (action.type === "deleteItem") 
//     // {
//     //     let newState =JSON.parse(JSON.stringify(state))
//     //     console.log(action.item);

//     //    newState.list.splice(action.item,1)
//     //     return newState
//     // }

//     // else {

//     //     return state;
//     // }

//     // 上面写法太难看了,改为switch语法来写
//     let newState = JSON.parse(JSON.stringify(state))//拷贝state
//     switch (action.type) {
//         case CHANGE_INPUT:
//             // case "change_input_value":
//             newState.inputValue = action.value;
//             return newState;
//             break;
//         case ADD_ITEM:
//             // case "addItem":
//             newState.list.push(state.inputValue)//将输入框内容再加一个给list
//             newState.inputValue = ''//加完以后清除
//             return newState
//             break;
//         case DELETE_ITEM:
//             // case "deleteItem":
//             // console.log(action.item);
//             newState.list.splice(action.item, 1)
//             return newState
//             break;
//         default:
//             return state;
//     }

// }