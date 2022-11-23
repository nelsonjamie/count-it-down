import React from "react"
import './App.css'


class DispCard extends React.Component {
	state = {
		birth1: '03/03/2022',
		xmas: '12/25/2022',
		nyd: '1/1/2023',
		timeLeft1: ''
	}
	
	calcDays = () => {
		let year = new Date().getFullYear()
		let difference = +new Date('12/25/${year}') - +new Date()
		
		if (difference > 0) {
			this.state.timeLeft1 = {
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
					minutes: Math.floor((difference / 1000 / 60) % 60),
					seconds: Math.floor((difference / 1000) % 60)
				  }
			return this.state.timeLeft1	
		}
		
		}
	

	render() {
		return (
			<>
				<figure className="image-block">
					<h1>40 days</h1>
					<img src="https://hips.hearstapps.com/hmg-prod/images/interior-christmas-magic-glowing-tree-fireplace-royalty-free-image-1628537941.jpg" alt="" />
					<figcaption>
						<h3>
							Until Christmas 2022
						</h3>
						<h5>{this.state.xmas}</h5>
						<p>Will occur at our house after the guy in the big red suit visits. Presents. Brunch. Good times.</p>
						<button>
							Edit Info
						</button>
					</figcaption>
				</figure>

				<figure className="image-block">
					<h1>47 days</h1>
					<img src="https://townsquare.media/site/385/files/2017/06/RS8796_453917889.jpg?w=980&q=75" alt="" />
					<figcaption>
						<h3>
							Until New Year 2023
						</h3>
						<h5>{this.state.nyd}</h5>
						<p>Let's celebrate the ending of 2022 and the beginning of 2023. Dancing. Drinks. Good times.</p>
						<button>
							Edit Info
						</button>
					</figcaption>
				</figure>

				<figure className="image-block">
					<h1>108 days</h1>
					<img src="https://thumbs.dreamstime.com/b/happy-birthday-party-triangle-flags-confetti-background-vector-illustration-60000502.jpg" alt="" />
					<figcaption>
						<h3>
							Until Will's Birthday
						</h3>
						<h5>{this.state.birth1}</h5>
						<p>The big 4-0! Let's celebrate! Good times to be had!</p>
						<button>
							Edit Info
						</button>
					</figcaption>
				</figure>
			</>
		)
	}
}

export default DispCard
