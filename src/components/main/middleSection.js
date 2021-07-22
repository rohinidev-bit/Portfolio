import React, { Component } from 'react'
import WorkEx from '../screen/WorkEx'
import Projects from '../screen/Projects'
import Contact from '../screen/Contact'
import Volunteer from '../screen/Volun'
import About from '../screen/About'
export default class middleSection extends Component {
	render() {
		return (
			<>
				<div className="padded">
					<div id="home" style={{ height: 'max-content' }}>
						<About />
					</div>
				</div>
				<div className="padded">

					<div id="work" style={{ height: 'max-content' }}>
						<WorkEx />
					</div>
				</div>

				<div id="projects" style={{ height: 'max-content' }}>
					<Projects />
				</div>
				{/* volunteer inc width */}
				<div className="padded">
					<div id="volunteer" style={{ height: 'max-content' }}>
						<Volunteer />
					</div>
				</div>
				<div className="padded">
					<div id="contact" style={{ height: '2vh' }}>
						<Contact />
					</div>
				</div>

			</>
		)
	}
}
