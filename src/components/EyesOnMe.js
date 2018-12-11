// Code EyesOnMe Component Here
import React from 'react'
class EyesOnMe extends React.Component {
	
	focusHandle = (event) => {
		console.log("Good!")
	}

	blurHandle = (event) => {
		console.log("Hey! Eyes on me!")
	}

	render() {
		return (
			<div>
			<button onFocus={(event) => this.focusHandle(event)} onBlur={(event)=> this.blurHandle(event)}>Button</button>
			</div>
		)
	}
}

export default EyesOnMe