import React from 'react';

import Header from './header'
import Head from '../Head/Head'

import MiddleSection from './middleSection'

import DotRing from "../DotRing/DotRing";


const Home = () => {
	return (
		<>
			<DotRing />
			<div
				style={{
					top: "25vh",
					position: "absolute",
					"left": 0,
					"right": 0,
					"margin": "0 auto",

					"font-size": "16pt",
				}}
			>
				<div className="padded" style={{ "text-align": "center" }}>
				</div>
				<div className="padded" style={{ "text-align": "center" }}>
				</div>
				<div className="padded" style={{ "text-align": "center" }}>
					<h1 style={{
						color: "#ffffff", "font-family": "Lato, sans-serif", "font-weight": "300", "line-height": "58px",
						"display": "inline",
						"margin-top": "66.66%",
						"font-size": "calc(1em + 7vw)",
					}}>Hi, I'm   Rohini </h1>
				</div>
				<div className="padded" style={{ "text-align": "center" }}>
				</div>
				<div className="padded" style={{ "text-align": "center" }}>
					<h1 style={{
						color: "#ffffff", "font-family": "Lato, sans-serif", "font-weight": "300", "line-height": "58px",
						"display": "inline",
						"margin-top": "66.66%",
						"font-size": "calc(1em + 1vw)",
						"text-align": "center"
					}}> Scroll down to learn more about me :)  </h1>
				</div>
			</div>
			<Head />
			<Header />
			<MiddleSection />
		</>

	)
}

export default Home;