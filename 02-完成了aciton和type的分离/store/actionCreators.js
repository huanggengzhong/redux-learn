// 这一步是为了把action对象进行分离,这样统一封装,方便其它action复用

import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionType';

export const changeInputAction = (value) => {
    return {

        type: CHANGE_INPUT,
        value: value
    }

}

export const addItemAction = () => {
    return {
        type: ADD_ITEM
    }
}

export const deleteItemAction = (index) => {
    return {
        type: DELETE_ITEM,
        item: index
    }
}