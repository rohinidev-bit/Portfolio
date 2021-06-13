import React from "react";
import { render } from "react-dom";
import Particles from "react-particles-js";
import "pathseg";

import deer from "./deer.svg";

const styles = {
	fontFamily: "sans-serif",
	textAlign: "center",
	background: "#555"
};

const Land = () => (
	<div style={styles}>
		<Particles
			params={{
				fps_limit: 28,
				particles: {
					color: {
						value: "#ff1609"
					},
					number: {
						value: 200,
						density: {
							enable: false
						}
					},
					size: {
						value: 2,
						random: true,
						anim: {
							enable: false,
							speed: 10,
							size_min: 0.1,
							sync: false
						}
					},
					shape: {
						type: "circle",
						stroke: {
							width: 0,
							color: "#fff"
						},
						polygon: {
							nb_sides: 5
						}
					},
					line_linked: {
						enable: true,
						distance: 50,
						opacity: 0.4,
						color: "#fff"
					},
					move: {
						speed: 1
					},
					opacity: {
						anim: {
							enable: true,
							opacity_min: 0.05,
							speed: 2,
							sync: false
						},
						value: 0.4
					}
				},
				polygon: {
					enable: true,
					scale: 0.5,
					type: "inline",
					move: {
						radius: 2
					},
					url: deer,
					inline: {
						arrangement: "equidistant"
					},
					draw: {
						enable: false,
						stroke: {
							color: "rgba(255, 255, 255, .2)"
						}
					}
				},
				retina_detect: false,
				interactivity: {
					events: {
						onhover: {
							enable: true,
							mode: "bubble"
						}
					},
					modes: {
						bubble: {
							size: 6,
							distance: 40
						}
					}
				}
			}}
		/>
		<h2>Start editing to see some magic happen {"\u2728"}</h2>
	</div>
);

export default Land