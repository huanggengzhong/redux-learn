/* 
特别说明:
Reudcer只是返回了更改的数据，但是并没有更改store中的数据，store拿到了Reducer的数据，自己对自己进行了更新。
*/
/* 
使用redux的三个注意点:
1.store必须是唯一的，多个store是坚决不允许，只能有一个store空间
2.只有store能改变自己的内容(store自己更新数据)，Reducer不能改变(reducer只是返回了数据)
3.Reducer必须是纯函数
*/
/* reducer写法注意点:
比如在Reducer里增加一个异步ajax函数，获取一些后端接口数据，然后再返回，这就是不允许的（包括你使用日期函数也是不允许的）
*/
import {createStore } from 'redux';
import reducer from './reducer';
const store =createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;