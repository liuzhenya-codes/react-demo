import { Component } from 'react'
import store from './store/'
import { getChangeInputAction, getTodolistData, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class ReduxThunk extends Component {
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
    // 这里拿到的 action 就是一个函数, redux 本身的 dispatch 不能处理函数, 但是经过 redux-thunk 升级后的 dispatch 就能够处理函数了
    // 函数派入 dispatch 后, store 会执行这个函数, 并将 dispatch 作为形参传入函数, 函数在处理好一个 action 对象时, 可以使用此实参将 action 对象传入 reducer 执行
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

export default ReduxThunk