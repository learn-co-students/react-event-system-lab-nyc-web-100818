// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {


  _onFocus = () => {
    console.log('Good!')
  }

  _onBlur = () => {
    console.log('Hey! Eyes on me!')
  }


  render() {
    return (
      <button
      onFocus={this._onFocus}
      onBlur={this._onBlur}
      />
    )
  }
}
