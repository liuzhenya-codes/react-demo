const stateData = {
  inputValue: '',
  list: []
}

const reducer = (state = stateData, action) => {
  switch (action.type) {
    case 'change_input_value': {
      const newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.value
      return newState
    }
    case 'add_list': {
      const newState = JSON.parse(JSON.stringify(state))
      newState.list.push(newState.inputValue)
      return newState
    }
    case 'delete_list': {
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