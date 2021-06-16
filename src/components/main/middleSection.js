import React, { Component } from 'react'
import WorkEx from '../screen/WorkEx'
import Projects from '../screen/Projects'
import Skills from '../screen/Skills'
export default class middleSection extends Component {
	render() {
		return (
			<>
				<div id="home" style={{ height: 500 }}>
					<WorkEx />
				</div>
				<div id="about" style={{ height: 500 }}>
					<Projects />
				</div>
				<div id="contact" style={{ height: 500 }}>
					<Skills />
				</div>
				<div id="service" style={{ height: 500 }}>
					<h1>This is Service section</h1>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
				</div>
			</>
		)
	}
}
