import { Component, Fragment } from 'react'
import './style.css'

class OpacityInAnimation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState((prevState) => ({
      show: !prevState.show
    }))
  }

  render () {
    return (
      <Fragment>
        <div className={this.state.show ? 'in' : 'out'}>hello</div>
        <button onClick={this.toggle}>切换</button>
      </Fragment>
    )
  }
}

export default OpacityInAnimation