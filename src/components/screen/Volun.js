import React from "react"
import "./volun.css"


export default function Volun() {
	return (
		<div>

			<div className="volun">
				<h1 class="list--title">			<p style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "60px", "font-weight": "300", "marginLeft": "10%" }}> Volunteering Experience</p>
				</h1>
				<section class="list--wrapper">

					<div class="yo">
						<ol class="list">
							<li class="list--item">
								<a href="javascript:void(0)" class="list--link">
									<h2 class="list--link__header"><span>Joint Secretary, AR VR MR JUET</span></h2>
									<p class="list--link__description">The counter-reset CSS property resets a CSS counter to a given value.</p>
								</a>
							</li>
							<li class="list--item">
								<a href="javascript:void(0)" class="list--link">
									<h2 class="list--link__header"><span>UX/UI Volunteer, Computer Soceity of India</span></h2>
									<p class="list--link__description">The counter-increment CSS property increases or decreases the value of a CSS counter by a given value.</p>
								</a>
							</li>
							<li class="list--item">
								<a href="javascript:void(0)" class="list--link">
									<h2 class="list--link__header"><span>Director of Volunteer, Echo Magazine</span></h2>
									<p class="list--link__description">The content CSS property replaces an element with a generated value. Objects inserted using the content property are anonymous replaced elements.</p>
								</a>
							</li>
						</ol>
					</div>
				</section>
			</div>

		</div>
	)
}