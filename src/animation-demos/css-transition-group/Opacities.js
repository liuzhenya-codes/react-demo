import { Component, Fragment } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './style.css'

class Opacities extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true,
      list: []
    }
    this.add = this.add.bind(this)
  }

  add () {
    this.setState((prevState) => ({
      list: [...prevState.list, 'item']
    }))
  }

  render () {
    return (
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={1000}
                  classNames='fade'
                  key={index}
                >
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        
        <button onClick={this.add}>添加</button>
      </Fragment>
    )
  }
}

export default Opacities