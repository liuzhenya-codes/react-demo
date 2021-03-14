import { Component } from 'react'
import store from '../store/state'
import { getChangeInputAction, getInitTodolist, getAddItemAction, getDeleteItemAction } from '../store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

class ReduxDemo extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    console.log(this.state)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handelInputKeyUp = this.handelInputKeyUp.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  initTodoList () {
    axios.get('mock/todolist.json').then(res => {
      const action = getInitTodolist(res.data)
      store.dispatch(action)
    }).catch(e => {
      console.warn(e)
    })
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
}

export default ReduxDemo