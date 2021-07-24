import React from 'react';

import Header from './header'
import Head from '../Head/Head'

import MiddleSection from './middleSection'
// import { useContext } from "react";
// import { Container, Row, Col } from 'react-bootstrap'

import DotRing from "../DotRing/DotRing";
// import { MouseContext } from "../context/mouse-context";

const Home = () => {
	return (
		<>
			<DotRing />
			<div
				style={{
					position: "absolute",
					top: "25vh",
					left: "25vh",
					// width: "100%",
					// height: "100%"

				}}
			>
				<h1 style={{ color: "#ffffff", "font-family": "Lato, sans-serif", "font-size": "4.5vw", "font-weight": "300", "line-height": "58px", "margin": "0 0 8vh" }}>Hi, </h1>
				<h1 style={{ color: "#ffffff", "font-family": "Lato, sans-serif", "font-size": "5vw", "font-weight": "300", "line-height": "58px", "margin": "0 0 8vh" }}>I'm Rohini </h1>
				<h1 style={{ color: "#ffffff", "font-family": "Lato, sans-serif", "font-size": "1.5vw", "font-weight": "300", "line-height": "58px", "margin": "0 0 8vh" }}>I'm a MERN stack developer looking for dev roles. </h1>
				<h1 style={{ color: "#ffffff", "font-family": "Lato, sans-serif", "font-size": "1.5vw", "font-weight": "300", "line-height": "58px", "margin": "0 0 8vh" }}> Scroll down to learn more about me :)  </h1>
			</div>
			<Head />
			<Header />
			<MiddleSection />
		</>

	)
}

export default Home;