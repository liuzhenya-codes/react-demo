import { Component } from 'react'
import { getChangeInputAction, getTodolistData, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import { connect } from 'react-redux'

class ReactRedux extends Component {
  render () {
    return <TodoListUI
            inputValue={this.props.inputValue}
            list={this.props.list}
            handleBtnClick={this.props.handleBtnClick}
            handelInputKeyUp={this.props.handelInputKeyUp}
            handleInputChange={this.props.handleInputChange}
            handelDelete={this.props.handelDelete}
          />
  }

  componentDidMount () {
    this.props.initTodoList()
  }

}

const mapStatesToProps = (state) => ({
  inputValue: state.inputValue,
  list: state.list,
})

const mapDispatchesToProps = (dispatch) => {
  const handleBtnClick = () => {
    const action = getAddItemAction()
    dispatch(action)
  }
  const handleInputChange = (e) => {
    const action = getChangeInputAction(e.target.value)
    dispatch(action)
  }
  return {
    initTodoList () {
      const action = getTodolistData()
      // 这里拿到的 action 就是一个函数, redux 本身的 dispatch 不能处理函数, 但是经过 redux-thunk 升级后的 dispatch 就能够处理函数了
      // 函数派入 dispatch 后, store 会执行这个函数, 并将 dispatch 作为形参传入函数, 函数在处理好一个 action 对象时, 可以使用此实参将 action 对象传入 reducer 执行
      dispatch(action)
    },
  
    handleInputChange (e) {
      handleInputChange(e)
    },
  
    handleBtnClick () {
      handleBtnClick()
    },
  
    handelInputKeyUp (e) {
      if (e.keyCode === 13) {
        handleBtnClick()
        handleInputChange({target: {value: ''}})
      }
    },
  
    handelDelete (index) {
      const action = getDeleteItemAction(index)
      dispatch(action)
    }

  }
}

export default connect(mapStatesToProps, mapDispatchesToProps)(ReactRedux)