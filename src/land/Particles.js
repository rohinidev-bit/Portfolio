import React from "react";
import Particles from "react-particles-js";
import "pathseg";
import deer from "./deer.svg";


// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
	<div
		style={{
			marginTop: "50px",
			background: "#92B1B6",
		}}>
		<div>
			<Particles
				params={{
					fps_limit: 200,
					particles: {
						color: {
							value: "#fff"
						},
						number: {
							value: 200,
							density: {
								enable: false
							}
						},
						size: {
							value: 6,
						},
						shape: {
							type: "circle",
							stroke: {
								width: 0,
								color: "#35455D"
							},
							polygon: {
								nb_sides: 900000
							}
						},
						line_linked: {
							enable: true,
							distance: 90,
							opacity: 0.4,
							color: "#fff"
						},
						move: {
							speed: 0.01
						},
						opacity: {

							value: 0.4
						}
					},
					polygon: {
						enable: true,
						scale: 1.1,
						type: "inline",
						move: {
							enable: false
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
								// enable: true,
								mode: "bubble"
							}
						},
						modes: {
							bubble: {
								size: 600,
								distance: 6000
							}
						}
					}
				}}
			/>
		</div>
	</div>
);

