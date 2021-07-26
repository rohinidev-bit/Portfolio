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
					position: "absolute",
					top: "25vh",
					left: "18vh",
				}}
			>
				<h1 style={{ color: "#ffffff", "font-family": "Lato, sans-serif", "font-size": "90px", "font-weight": "300", "line-height": "58px", "margin": "0 0 8vh" }}>Hi, </h1>
				<h1 style={{ color: "#ffffff", "font-family": "Lato, sans-serif", "font-size": "100px", "font-weight": "300", "line-height": "58px", "margin": "0 0 8vh" }}>I'm Rohini </h1>
				<h1 style={{ color: "#ffffff", "font-family": "Lato, sans-serif", "font-size": "25px", "font-weight": "300", "line-height": "58px", "margin": "0 0 8vh" }}> Scroll down to learn more about me :)  </h1>
			</div>
			<Head />
			<Header />
			<MiddleSection />
		</>

	)
}

export default Home;