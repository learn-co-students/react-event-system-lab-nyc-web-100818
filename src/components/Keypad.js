// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  constructor(props) {
    super(props)
  }

  handleKeyUp = (event) => {
    console.log('Entering password...');
  }

  render() {
    return(
      <form action="">
        <input 
          type="password" 
          onKeyUp={this.handleKeyUp}
        />
      </form>

    )
  }
}

export default Keypad