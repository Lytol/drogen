import React from 'react'

console.log("[drogens] Loaded")

export default class Drogen extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
