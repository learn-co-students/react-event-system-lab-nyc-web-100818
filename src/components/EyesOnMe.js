import React, { Component } from 'react'

export default class EyesOnMe extends Component {

  handleFocus = (e) => {
    console.log('Good!')
  }

  handleBlur = (e) => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onBlur={this.handleBlur} onFocus={this.handleFocus}>Eyes On Me</button>
    )
  }
}