import { Component, Fragment } from 'react'

import Item from './Item'

class App extends Component {
  // 构造函数, 设置基础数据
  constructor (props) {
    super(props)
    // 数据
    this.state = {
      list: [
        'learn react',
        'learn english'
      ],
      inputValue: ''
    }
    // 为需要使用 this 的函数配置绑定指向
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handelAddItem = this.handelAddItem.bind(this)
    this.handelDeleteItem = this.handelDeleteItem.bind(this)
    this.handelInputKeyUp = this.handelInputKeyUp.bind(this)
  }

  // 输入框内容变化时
  handleInputChange () {
    const inputValue = this.inputElement.value
    this.setState(() => ({ inputValue }))
  }

  // 点击添加时
  handelAddItem () {
    if (!this.state.inputValue.trim()) {
      alert('请添加具体的任务名称!')
      return
    }
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => { // setState 接收第二个回调函数参数, 当 setState 的变化使得 dom 变更这个动作完成之后, 会调用这个回调函数, 类似于 Vue 里的 this.$nextTick()
      console.log(this.ulElement.querySelectorAll('li'))
    })
  }

  handelInputKeyUp (e) {
    if (e.keyCode === 13) this.handelAddItem()
  }

  // 删除某一项 item
  handelDeleteItem (index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }

  // list 渲染
  getList () {
    return this.state.list.map((item, index) =>
      <Item
        key={index}
        text={item}
        index={index}
        handelDeleteItem={this.handelDeleteItem} // 若子组件需要调用父组件方法, 则需要父组件将方法传入子组件, 传入后, 子组件直接调用 this.props.handelDeleteItem 以触发父组件的 handelDeleteItem 方法
      />
    )
  }

  // 编译
  render () {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            onKeyUp={this.handelInputKeyUp}
            ref={(element) => {this.inputElement = element}}
          />
          <button className='btn-css' onClick={this.handelAddItem}>添加</button>
        </div>
        <ul ref={(element) => {this.ulElement = element}}>{this.getList()}</ul>
      </Fragment>
    );
  }
}

export default App;
