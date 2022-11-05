import React from "react"
import './App.css';

class App extends React.Component {
	state = {
		event1: '12/25/2022',
		event2: ''
	}

	render() {
		return (
			<>
				<h1>Hello World</h1>
				<span>This is a {this.state.event1} page</span>
			</>
		)
	}
}

export default App
