import { Component } from 'react'
import store from '../store/state'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from '../store/actionTypes'

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

  handleInputChange (e) {
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action)
  }

  handleBtnClick () {
    const action = {
      type: ADD_TODO_ITEM
    }
    store.dispatch(action)
    this.handleInputChange({target: {value: ''}})
  }

  handelInputKeyUp (e) {
    if (e.keyCode === 13) this.handleBtnClick()
  }

  handelDelete (index) {
    const action = {
      type: DELETE_TODO_ITEM,
      index
    }
    store.dispatch(action)
  }

  handleStoreChange () {
    this.setState(store.getState())
  }

  render () {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.handleInputChange} onKeyUp={this.handelInputKeyUp}/>
        <button onClick={this.handleBtnClick}>提交</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={item} onClick={this.handelDelete.bind(this, index)}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default ReduxDemo