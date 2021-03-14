import { CHANGE_INPUT_VALUE, INIT_TODOLIST, ADD_TODO_ITEM, DELETE_TODO_ITEM } from '../store/actionTypes'
import axios from 'axios'

export const getChangeInputAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getTodolistData = () => ((dispatch) => {
  axios.get('mock/todolist.json').then(res => {
    const action = getInitTodolist(res.data)
    console.log(action)
    dispatch(action)
  }).catch(e => {
    console.warn(e)
  })
})
export const getInitTodolist = (data) => ({
  type: INIT_TODOLIST,
  data
})
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})
export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})