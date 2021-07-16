import React from "react"
import "./project.css"
export default function Projects() {
	return (
		<div>
			<div class="heading">
				<h1>Projects</h1>
			</div>
			<div class="main1" style={{
				fontFamily: "sans-serif",
				textAlign: "center",
			}}>
				<ul class="cards">
					<li class="cards_item">
						<div class="card">
							<div class="card_image"><img src="https://picsum.photos/500/300/?image=10"></img></div>
							<div class="card_content">
								<h2 class="card_title">Online Examination Monitoring</h2>
								<p class="card_text">An online examination portal that allows a multi-factor user authentication system which includes Face Recognition System and username, password-based login</p>
								<p>Python, PHP, WAMP Server, OpenCV, HTML, CSS, SQL </p>
								<button class="btn card_btn"><a href="https://github.com/rohinidev-bit/Online-Examination-Monitoring" rel="noopener noreferrer" target="_blank">Read More</a></button>
							</div>
						</div>
					</li>
					<li class="cards_item">
						<div class="card">
							<div class="card_image"><img src="https://picsum.photos/500/300/?image=5"></img></div>
							<div class="card_content">
								<h2 class="card_title">File Sharing System</h2>
								<p class="card_text">Allows users to store files in the cloud, delete the file and generate unique links for sharing files</p>
								<p> NodeJS, MongoDB, HTML, CSS</p>
								<p></p>
								<button class="btn card_btn"><a href="https://github.com/rohinidev-bit/File-Sharing_System" rel="noopener noreferrer" target="_blank">Read More</a></button>
							</div>
						</div>
					</li>
					<li class="cards_item">
						<div class="card">
							<div class="card_image"><img src="https://picsum.photos/500/300/?image=11"></img></div>
							<div class="card_content">
								<h2 class="card_title">Hostel Forum for Everyone!</h2>
								<p class="card_text">A portal that allows students and their parents to post query/comment, also read other such comments if any and access information such as notice, food menu and contact that can be used by teachers, students and parents.</p>
								<p>ReactJS, Firebase, Material UI, Bootstrap, CSS</p>
								<button class="btn card_btn"><a href="https://github.com/rohinidev-bit/Hostel-Review-Management" rel="noopener noreferrer" target="_blank">Read More</a></button>
							</div>
						</div>
					</li>
					<li class="cards_item">
						<div class="card">
							<div class="card_image"><img src="https://picsum.photos/500/300/?image=14"></img></div>
							<div class="card_content">
								<h2 class="card_title">Hospital Finder App</h2>
								<p class="card_text">An app that helps you find Hospital nearby your current location to help you in emergencies around a given radius.</p>
								<p> React Native, Redux, Google Places API</p>
								<button class="btn card_btn"><a href="https://github.com/rohinidev-bit/Hospital-Finder-Mobile-Application" rel="noopener noreferrer" target="_blank">Read More</a></button>
							</div>
						</div>
					</li>
					<li class="cards_item">
						<div class="card">
							<div class="card_image"><img src="https://picsum.photos/500/300/?image=17"></img></div>
							<div class="card_content">
								<h2 class="card_title">URL Shortener</h2>
								<p class="card_text">URL shortener is a tool that creates a short, unique URL that will redirect to the specific website of your choosing.</p>
								<p> React, Node, Express</p>
								<button class="btn card_btn"><a href="https://github.com/rohinidev-bit/URL-shortener" rel="noopener noreferrer" target="_blank">Read More</a></button>
							</div>
						</div>
					</li>
					<li class="cards_item">
						<div class="card">
							<div class="card_image"><img src="https://picsum.photos/500/300/?image=2"></img></div>
							<div class="card_content">
								<h2 class="card_title"> Invoice Generator </h2>
								<p class="card_text">An invoice generator tool used to create an invoice online without any hassle or error. Generates PDF of the invoice and allows you to download the file to the desktop.</p>
								<p>React, HTML, CSS, Material UI</p>
								<button class="btn card_btn"><a href="https://github.com/rohinidev-bit/Invoice-Generator" rel="noopener noreferrer" target="_blank">Read More</a></button>
							</div>
						</div>
					</li>
				</ul>
			</div>


		</div>
	)
}