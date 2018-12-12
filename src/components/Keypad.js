// Code Keypad Component Here
// Code EyesOnMe Component Here
import React from 'react'
class Keypad extends React.Component {

  logInput = (event) => {
		console.log("Entering password...")
	}

  render(){
    return <input type="password" onKeyUp={(event)=>this.logInput(event)}/>
  }
}
export default Keypad
