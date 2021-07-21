import React from "react"
import "./project.css"
import Eye from './images/Eye.png'
import File from './images/file.png'
import Like from './images/like.png'
import Hrt from './images/Hrt.png'
import Url from './images/url.png'
import Bill from './images/bill.png'
export default function Projects() {
	return (
		<div>
			<div class="heading">
				<div className="center">
					<p style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "60px", "font-weight": "300" }}> Projects</p>
				</div>
			</div>
			<div class="main1" style={{
				textAlign: "center",
			}}>
				<ul class="cards">
					<li class="cards_item">
						<div class="card">
							<div class="card_image"><img src={Eye} alt=""></img></div>
							<div class="card_content">
								<h2 class="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "28px", "font-weight": "300" }}>Online Examination Monitoring</h2>
								<h2 class="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>About</h2>
								<p class="card_text" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>An online examination portal that allows a multi-factor user authentication system which includes Face Recognition System and username, password-based login</p>
								<h2 class="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>Created using</h2>
								<p class="card_text" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>Python, PHP, WAMP Server, OpenCV, HTML, CSS, SQL </p>
								<button class="btn card_btn"><a href="https://github.com/rohinidev-bit/Online-Examination-Monitoring" rel="noopener noreferrer" target="_blank">Read More</a></button>
							</div>
						</div>
					</li>
					<li class="cards_item">
						<div class="card">
							<div class="card_image"><img src={File} alt="" ></img></div>
							<div class="card_content">
								<h2 class="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "28px", "font-weight": "300" }}>File Sharing<br /> System</h2>
								<h2 class="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>About</h2>
								<p class="card_text" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>Allows users to store files in the cloud, delete the file and generate unique links for sharing files</p>
								<h2 class="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>Created using</h2>

								<p style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}> NodeJS, MongoDB, HTML, CSS</p>
								<p></p>
								<button class="btn card_btn"><a href="https://github.com/rohinidev-bit/File-Sharing_System" rel="noopener noreferrer" target="_blank">Read More</a></button>
							</div>
						</div>
					</li>
					<li class="cards_item">
						<div class="card">
							<div class="card_image"><img src={Like} alt=""></img></div>
							<div class="card_content">
								<h2 class="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "28px", "font-weight": "300" }}>Hostel Forum for Everyone!</h2>
								<h2 class="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>About</h2>

								<p class="card_text" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>A portal that allows students and their parents to post query/comment, also read other such comments if any and access information such as notice, food menu and contact that can be used by teachers, students and parents.</p>
								<h2 class="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>Created using</h2>

								<p style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>ReactJS, Firebase, Material UI, Bootstrap, CSS</p>
								<button class="btn card_btn"><a href="https://github.com/rohinidev-bit/Hostel-Review-Management" rel="noopener noreferrer" target="_blank">Read More</a></button>
							</div>
						</div>
					</li>
					<li class="cards_item">
						<div class="card">
							<div class="card_image"><img src={Hrt} alt=""></img></div>
							<div class="card_content">
								<h2 class="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "28px", "font-weight": "300" }}>Hospital Finder App</h2>
								<h2 class="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>About</h2>

								<p class="card_text" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>An app that helps you find Hospital nearby your current location to help you in emergencies around a given radius.</p>
								<h2 class="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>Created using</h2>

								<p style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}> React Native, Redux, Google Places API</p>
								<button class="btn card_btn"><a href="https://github.com/rohinidev-bit/Hospital-Finder-Mobile-Application" rel="noopener noreferrer" target="_blank">Read More</a></button>
							</div>
						</div>
					</li>
					<li class="cards_item">
						<div class="card">
							<div class="card_image"><img src={Url} alt="" ></img></div>
							<div class="card_content">
								<h2 class="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "28px", "font-weight": "300" }}>URL Shortener</h2>
								<h2 class="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>About</h2>

								<p class="card_text" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>URL shortener is a tool that creates a short, unique URL that will redirect to the specific website of your choosing.</p>
								<h2 class="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>Created using</h2>

								<p style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}> React, Node, Express</p>
								<button class="btn card_btn"><a href="https://github.com/rohinidev-bit/URL-shortener" rel="noopener noreferrer" target="_blank">Read More</a></button>
							</div>
						</div>
					</li>
					<li class="cards_item">
						<div class="card">
							<div class="card_image"><img src={Bill} alt=""></img></div>
							<div class="card_content">
								<h2 class="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "28px", "font-weight": "300" }}> Invoice Generator </h2>
								<h2 class="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>About</h2>
								<h2 class="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>Created using</h2>

								<p class="card_text" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>An invoice generator tool used to create an invoice online without any hassle or error. Generates PDF of the invoice and allows you to download the file to the desktop.</p>
								<p style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>React, HTML, CSS, Material UI</p>
								<button class="btn card_btn"><a href="https://github.com/rohinidev-bit/Invoice-Generator" rel="noopener noreferrer" target="_blank">Read More</a></button>
							</div>
						</div>
					</li>
				</ul>
			</div>


		</div>
	)
}