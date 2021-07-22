import React from "react"
import "./volun.css"
import Echo from './images/echo.jpg'
export default function Volun() {
	return (
		<div>
			<p style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "40px", "font-weight": "300", "display": "flex", "justifyContent": "center", "alignSelf": "center" }}> Volunteering Experience</p>
			<div class='split-pane col-xs-12 col-sm-6 uiux-side'>
				<div>
					<div class='text-content'>
						<div class='big'>UI/UX?</div>
					</div>

				</div>
			</div>
			<div class='split-pane col-xs-12 col-sm-6 frontend-side'>
				<div class='text-content'>
					<img src={Echo} alt=""></img>
				</div>
			</div>
			<div class='split-pane col-xs-12 col-sm-6 uiux-side'>
				<div>
					<div class='text-content'>
						<div class="bold">You want</div>
						<div class='big'>UI/UX?</div>
					</div>

				</div>
			</div>
			<div class='split-pane col-xs-12 col-sm-6 frontend-side'>
				<div>
					<div class='text-content'>
						<div class="bold">You want</div>
						<div class='big'>FRONT-END?</div>
					</div>
				</div>
			</div>
		</div>
	)
}