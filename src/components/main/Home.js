import React from 'react';

import Header from './header'
import Head from '../Head/Head'

import MiddleSection from './middleSection'
// import { useContext } from "react";

import DotRing from "../DotRing/DotRing";
// import { MouseContext } from "../context/mouse-context";

const Home = () => {
	return (
		<>
			<DotRing />
			<Head />
			<Header />
			<MiddleSection />
		</>
	)
}

export default Home;