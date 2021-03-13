import { Component, Fragment } from 'react'
import ProsTypes from 'prop-types'

class Item extends Component {
  constructor (props) {
    super(props)
    this.handelDeleteItem = this.handelDeleteItem.bind(this)
  }
  handelDeleteItem () {
    this.props.handelDeleteItem(this.props.index)
  }
  render () {
    return (
      <Fragment>
        <li>{`${this.props.test} - ${this.props.text}`}</li>
        <button onClick={this.handelDeleteItem}>删除</button>
      </Fragment>
    )
  }
  shouldComponentUpdate (nextProps, nextState) { // 灵活使用生命周期函数 shouldComponentUpdate 进行新旧数据比对, 避免无意义的组件重新渲染
    return nextProps.text !== this.props.text // 只有当前组件需要的 props 发生变化时, 才需要重新渲染当前组件, 否则就不需要重新渲染
  }
}

/*
React 中的 props 类型和默认值
文档: https://react.docschina.org/docs/typechecking-with-proptypes.html
*/
Item.propTypes = { // 配置 props 里各项的类型
  test: ProsTypes.string.isRequired,
  text: ProsTypes.oneOfType([ProsTypes.number, ProsTypes.string]),
  index: ProsTypes.number,
  handelDeleteItem: ProsTypes.func
}

Item.defaultProps = { // 配置 props 里各项的默认值
  test: '默认值'
}

export default Item