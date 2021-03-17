import { CHANGE_INPUT_VALUE, GET_TODOLIST_DATA, INIT_TODOLIST, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

export const getChangeInputAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getTodolistData = () => ({
  type: GET_TODOLIST_DATA
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