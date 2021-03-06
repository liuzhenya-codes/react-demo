import { Component } from 'react'
import store from './store'
import { getChangeInputAction, getTodolistData, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class ReduxDemo extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handelInputKeyUp = this.handelInputKeyUp.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  initTodoList () {
    const action = getTodolistData()
    // 这里正常使用一个对象, dispatch 出去,  reducer 和 redux-saga 会同步响应此 action, 然后异步操作会在 redux-saga 的文件域内去执行
    store.dispatch(action)
  }

  handleInputChange (e) {
    const action = getChangeInputAction(e.target.value)
    store.dispatch(action)
  }

  handleBtnClick () {
    const action = getAddItemAction()
    store.dispatch(action)
    this.handleInputChange({target: {value: ''}})
  }

  handelInputKeyUp (e) {
    if (e.keyCode === 13) this.handleBtnClick()
  }

  handelDelete (index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  handleStoreChange () {
    this.setState(store.getState())
  }

  render () {
    return <TodoListUI
            inputValue={this.state.inputValue}
            list={this.state.list}
            handleBtnClick={this.handleBtnClick}
            handelInputKeyUp={this.handelInputKeyUp}
            handleInputChange={this.handleInputChange}
            handelDelete={this.handelDelete}
          />
  }

  componentDidMount () {
    this.initTodoList()
  }

  componentWillUnmount () {
    this.setState = (state, callback) => {
      return
    }
  }

}

export default ReduxDemo