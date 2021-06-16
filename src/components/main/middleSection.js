import React, { Component } from 'react'
import WorkEx from '../screen/WorkEx'
import Projects from '../screen/Projects'
import Skills from '../screen/Skills'
import Contact from '../screen/Contact'
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
					<Contact />
				</div>
			</>
		)
	}
}
