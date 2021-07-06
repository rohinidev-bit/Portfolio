import React, { Component } from 'react'
import WorkEx from '../screen/WorkEx'
import Projects from '../screen/Projects'
import Skills from '../screen/Skills'
import Contact from '../screen/Contact'
import Volunteer from '../screen/Volun'
export default class middleSection extends Component {
	render() {
		return (
			<>
				<div id="work" style={{ height: 'max-content' }}>
					<WorkEx />
				</div>
				<div id="projects" style={{ height: 'max-content' }}>
					<Projects />
				</div>
				<div id="skills" style={{ height: 'max-content' }}>
					<Skills />
				</div>
				<div id="contact" style={{ height: '2vh' }}>
					<Contact />
				</div>
				<div id="volunteer" style={{ height: 'max-content' }}>
					<Volunteer />
				</div>
			</>
		)
	}
}
