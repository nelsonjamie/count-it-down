import React from "react"
import './App.css'


class DispCard extends React.Component {


	render() {
		return (
			<>
				<figure className="image-block">
					<h1>44 days</h1>
					<img src="https://hips.hearstapps.com/hmg-prod/images/interior-christmas-magic-glowing-tree-fireplace-royalty-free-image-1628537941.jpg" alt="" />
					<figcaption>
						<h3>
							Until Christmas 2023
						</h3>
						<p>Will occur at our house after the guy in the big red suit visits. Presents. Brunch. Good times.</p>
						<button>
							Edit Info
						</button>
					</figcaption>
				</figure>

				<figure className="image-block">
					<h1>51 days</h1>
					<img src="https://d.newsweek.com/en/full/1960033/new-year-refers-december-31.jpg" alt="" />
					<figcaption>
						<h3>
							Until New Year 2023
						</h3>
						<p>Let's celebrate the ending of 2022 and the beginning of 2023. Dancing. Drinks. Good times.</p>
						<button>
							Edit Info
						</button>
					</figcaption>
				</figure>

				<figure className="image-block">
					<h1>112 days</h1>
					<img src="https://hips.hearstapps.com/hmg-prod/images/birthday-cake-decorated-with-colorful-sprinkles-and-royalty-free-image-1653509348.jpg" alt="" />
					<figcaption>
						<h3>
							Until Will's Birthday
						</h3>
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
