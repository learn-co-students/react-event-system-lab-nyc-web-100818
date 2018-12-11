// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  constructor(props) {
    super(props)
  }
  
  handleBlur = () => { 
    console.log('Hey! Eyes on me!');
     
  }

  handleFocus = () => {
    console.log('Good!');
  }

  render() {
    return(
        <button 
          type="password" 
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        ></button>

    )
  }
}

export default EyesOnMe