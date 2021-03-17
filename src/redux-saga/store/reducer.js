import { CHANGE_INPUT_VALUE, INIT_TODOLIST, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

const stateData = {
  inputValue: '',
  list: []
}

const reducer = (state = stateData, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE: {
      const newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.value
      return newState
    }
    case INIT_TODOLIST: {
      const newState = JSON.parse(JSON.stringify(state))
      newState.list = action.data
      return newState
    }
    case ADD_TODO_ITEM: {
      const newState = JSON.parse(JSON.stringify(state))
      newState.list.push(newState.inputValue)
      return newState
    }
    case DELETE_TODO_ITEM: {
      const newState = JSON.parse(JSON.stringify(state))
      newState.list.splice(action.index, 1)
      return newState
    }
    default:
      break
  }
  return state
}

export default reducer