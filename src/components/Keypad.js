// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component{

  handleInputPassword = () => console.log('Entering Password ...')


  render(){
    return (
      <div>
      <input
      type="password" onKeyUp={this.handleInputPassword}
      />
      </div>
    )
  }
}//class
