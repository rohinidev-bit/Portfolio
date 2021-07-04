import React, { Component } from 'react'
import { Link } from 'react-scroll'
import "./header.css"
export default class header extends Component {
	render() {
		return (
			<nav>
				<ul style={{ listStyle: 'none', justifyContent: 'space-around' }}>
					<li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
					<li><Link to="work" spy={true} smooth={true}>Work</Link></li>
					<li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
					<li><Link to="skills" spy={true} smooth={true}>Skills</Link></li>
					<li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
					<li><Link to="service" spy={true} smooth={true}>Service</Link></li>
				</ul>
			</nav>
		)
	}
}
