// Code Keypad Component Here
import React, {Component} from 'react'
import ReactDOM from 'react-dom';


export default class Keypad extends Component {


passwordLog = (event) => {
  console.log('Entering password...');
}

  render(){
    return(
      <input onKeyUp={this.passwordLog} type="password">
      </input>
    )
  }


}
