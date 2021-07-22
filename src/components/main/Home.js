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
					top: "23rem",
					left: "35rem",
					// width: "100%",
					// height: "100%"

				}}
			>
				<h1 style={{ color: "#ffffff", "font-family": "Lato, sans-serif", "font-size": "70px", "font-weight": "300", "line-height": "58px", "margin": "0 0 58px" }}>Hi, </h1>
				<h1 style={{ color: "#ffffff", "font-family": "Lato, sans-serif", "font-size": "90px", "font-weight": "300", "line-height": "58px", "margin": "0 0 58px" }}>I'm Rohini </h1>
				<h1 style={{ color: "#ffffff", "font-family": "Lato, sans-serif", "font-size": "30px", "font-weight": "300", "line-height": "58px", "margin": "0 0 58px" }}>I'm a MERN stack developer looking for dev roles.<br /> ..  </h1>
				<h1 style={{ color: "#ffffff", "font-family": "Lato, sans-serif", "font-size": "25px", "font-weight": "300", "line-height": "58px", "margin": "0 0 58px" }}> Scroll down to learn more about me :)  </h1>
			</div>
			<Head />
			<Header />
			<MiddleSection />
		</>

	)
}

export default Home;