// Code EyesOnMe Component Here
import React, {Component} from 'react'
import ReactDOM from 'react-dom';

export default class EyesOnMe extends Component {


  focus = (event) => {
      console.log('Good!');
  }

  blur = (event) => {
      console.log('Hey! Eyes on me!');
  }


render(){
  return(
    <button onFocus={this.focus} onBlur={this.blur}>
    </button>
  )
}

}//end of class
