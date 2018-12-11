// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {

  focusing = event => {
    console.log('Good!')
  }

  blurring = event => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.focusing} onBlur={this.blurring}>button</button>
    )
  }

}
