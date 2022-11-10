import React from "react"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

class DispCard extends React.Component {


	render() {
		return (
			<>
				<Card style={{ width: '18rem' }} className="text-center">
					<Card.Img variant='top' alt="new year" src="images/newyear.jpeg" />
					<Card.Body>
						<Card.Title>Coundown to 2023</Card.Title>
						<Card.Text>
							There are this many days left...
						</Card.Text>
						<Card.Text>
							53 Days
						</Card.Text>
						<Card.Link href="#">Edit this Countdown</Card.Link>
					</Card.Body>
				</Card>
				<br/>
				<Card style={{ width: '18rem' }} className="text-center">
					<Card.Img variant='top' alt="christmas" src="images/christmas.jpg" />
					<Card.Body>
						<Card.Title>Coundown to Christmas 2023</Card.Title>
						<Card.Text>
							There are this many days left...
						</Card.Text>
						<Card.Text>
							411 Days
						</Card.Text>
						<Card.Link href="#">Edit this Countdown</Card.Link>
					</Card.Body>
				</Card>
			</>
		)
	}
}

export default DispCard
