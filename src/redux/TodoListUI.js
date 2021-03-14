import { Component } from 'react'

class TodoListUI extends Component {
  render () {
    return (
      <div>
        <input value={this.props.inputValue} onChange={this.props.handleInputChange} onKeyUp={this.props.handelInputKeyUp}/>
        <button onClick={this.props.handleBtnClick}>提交</button>
        <ul>
          {
            this.props.list.map((item, index) => {
              return (
                <li key={item} onClick={() => {this.props.handelDelete(index)}}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoListUI