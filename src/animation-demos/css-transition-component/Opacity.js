import { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

class Opacity extends Component {
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
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          appear={true}
        >
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.toggle}>切换</button>
      </Fragment>
    )
  }
}

export default Opacity