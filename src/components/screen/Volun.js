import React from "react"
import "./volun.css"


export default function Volun() {
	return (
		<div style={{ "paddingBottom": "80px" }}>
			<h1 class="list--title"><p style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "3.5vw", "font-weight": "300", "marginLeft": "10%" }}> Volunteering Experience</p>
			</h1>
			<div className="volun">

				<section class="list--wrapper">
					<div class="yo">
						<ol class="list">
							<li class="list--item">
								<div class="list--link">
									<h2 class="list--link__header" style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "30px", "font-weight": "300" }}><span>Joint Secretary, AR VR MR JUET</span></h2>
									<p class="list--link__description" style={{ "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300" }}>Managed, tutored and guided members of the club. Facilitated sessions, workshops about design.
									</p>
								</div>
							</li>
							<li class="list--item">
								<div class="list--link">
									<h2 class="list--link__header" style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "30px", "font-weight": "300" }}><span>UX/UI Volunteer, Computer Soceity of India</span></h2>
									<p class="list--link__description" style={{ "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300" }}>Organized, performed, coordinated, promoted technical events, workshops and seminars.</p>
								</div>
							</li>
							<li class="list--item">
								<div class="list--link">
									<h2 class="list--link__header" style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "30px", "font-weight": "300" }}><span>Director of Volunteer, Echo Magazine</span></h2>
									<p class="list--link__description" style={{ "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300" }}> Provided administrative support for the marketing department. Liaised between three departments to deliver the project ahead of schedule.</p>
								</div>
							</li>
						</ol>
					</div>
				</section>
			</div>

		</div>
	)
}