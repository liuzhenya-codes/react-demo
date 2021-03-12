import { Component, Fragment } from 'react'

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
        <li>{this.props.text}</li>
        <button onClick={this.handelDeleteItem}>删除</button>
      </Fragment>
    )
  }
}

export default Item