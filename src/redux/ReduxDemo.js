import { Component } from 'react'
import store from '../store/state'

class ReduxDemo extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    console.log(this.state)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  handleInputChange () {}

  handleBtnClick () {}

  render () {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.handleInputChange}/>
        <button onClick={this.handleBtnClick}>提交</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={item}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default ReduxDemo