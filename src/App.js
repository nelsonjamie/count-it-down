import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DispCard from "./DispCard.js"

class App extends React.Component {
	state = {
		event1: '12/25/2022',
		event2: ''
	}

	render() {
		return (
			<>
				<h1>Count It Down!</h1>
				<DispCard />
			</>
		)
	}
}

export default App
