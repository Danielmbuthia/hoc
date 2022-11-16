import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
  render() {
    const {count,incrementCount,name} = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount} >Hovered {count} times by {name}</h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter,5)