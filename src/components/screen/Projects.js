import React from "react"
import "./project.css"
import Eye from './images/Eye.jpg'
import File from './images/File.jpg'
import Like from './images/Like.jpg'
import Hrt from './images/Hrt.jpg'
import Url from './images/url.jpg'
import Bill from './images/Bill.jpg'
export default function Projects() {
	return (
		<div>
			<div className="heading">
				<div className="center">
					<h1 class="list--title">	<p style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "3.5vw", "font-weight": "300", "marginLeft": "10%" }}> Projects</p></h1>
				</div>
			</div>
			<div className="main1" style={{
				textAlign: "center",
			}}>
				<ul className="cards">
					<li className="cards_item">
						<div className="card">
							<div className="card_image"><img src={Eye} alt=""></img></div>
							<div className="card_content">
								<h2 className="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "28px", "font-weight": "300" }}>Online Examination Monitoring</h2>
								<div className="padded">
									<h2 className="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>About</h2>
								</div>
								<p className="card_text" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>An online examination portal that allows a multi-factor user authentication system which includes Face Recognition System and password-based. </p>
								<div className="padded">

									<h2 className="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>Created using</h2>
								</div>
								<p className="card_text" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>Python, PHP, WAMP Server, OpenCV, HTML,  SQL </p>
								<button className="btn card_btn"><a href="https://github.com/rohinidev-bit/Online-Examination-Monitoring" rel="noopener noreferrer" target="_blank">Read More</a></button>
							</div>
						</div>
					</li>
					<li className="cards_item">
						<div className="card">
							<div className="card_image"><img src={File} alt="" ></img></div>
							<div className="card_content">
								<h2 className="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "28px", "font-weight": "300" }}>File Sharing<br /> System</h2>
								<div className="padded">

									<h2 className="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>About</h2>
								</div>
								<p className="card_text" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}> A system in which users write to as well as read files. Also, user can delete the file and generate unique links to share the files for others to access.</p>
								<div className="padded">
									<h2 className="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>Created using</h2>
								</div>
								<p style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}> NodeJS, Express, MongoDB, HTML, CSS, Bootstrap</p>
								<p></p>
								<button className="btn card_btn"><a href="https://github.com/rohinidev-bit/File-Sharing_System" rel="noopener noreferrer" target="_blank">Read More</a></button>
							</div>
						</div>
					</li>
					<li className="cards_item">
						<div className="card">
							<div className="card_image"><img src={Like} alt=""></img></div>
							<div className="card_content">
								<h2 className="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "28px", "font-weight": "300" }}>Hostel Forum for Everyone!</h2>
								<div className="padded">

									<h2 className="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>About</h2>
								</div>
								<p className="card_text" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>A portal that allows students and their parents to post query/comment, also read other such comments if any and access information.</p>
								<h2 className="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>Created using</h2>
								<div className="padded">
									<p style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>ReactJS, Firebase database and authentication, CSS</p>
								</div>
								<button className="btn card_btn"><a href="https://github.com/rohinidev-bit/Hostel-Review-Management" rel="noopener noreferrer" target="_blank">Read More</a></button>
							</div>
						</div>
					</li>
					<li className="cards_item">
						<div className="card">
							<div className="card_image"><img src={Hrt} alt=""></img></div>
							<div className="card_content">
								<h2 className="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "28px", "font-weight": "300" }}>Hospital Finder App</h2>
								<div className="padded">

									<h2 className="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>About</h2>
								</div>
								<p className="card_text" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>An app that helps you find Hospital nearby your current location to help you in emergencies around a given radius.</p>
								<div className="padded">

									<h2 className="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>Created using</h2>
								</div>
								<p style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}> React Native, Google Places API, Material UI</p>
								<button className="btn card_btn"><a href="https://github.com/rohinidev-bit/Hospital-Finder-Mobile-Application" rel="noopener noreferrer" target="_blank">Read More</a></button>
							</div>
						</div>
					</li>
					<li className="cards_item">
						<div className="card">
							<div className="card_image"><img src={Url} alt="" ></img></div>
							<div className="card_content">
								<h2 className="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "28px", "font-weight": "300" }}>URL Shortener</h2>
								<div className="padded">
									<h2 className="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>About</h2>
								</div>
								<p className="card_text" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>URL shortener is a tool that creates a short, unique links from a long URL (Uniform Resource Locator). that will redirect to the specific website of the user's choosing.</p>
								<h2 className="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>Created using</h2>
								<div className="padded">

									<p style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}> React, Node, Express, Material UI</p>
								</div>
								<button className="btn card_btn"><a href="https://github.com/rohinidev-bit/URL-shortener" rel="noopener noreferrer" target="_blank">Read More</a></button>
							</div>
						</div>
					</li>
					<li className="cards_item">
						<div className="card">
							<div className="card_image"><img src={Bill} alt=""></img></div>
							<div className="card_content">
								<h2 className="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "28px", "font-weight": "300" }}> Invoice Generator </h2>
								<div className="padded">
									<h2 className="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>About</h2>
								</div>
								<p className="card_text" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>An invoice generator tool used to create an invoice online without any hassle or error. Generates PDF of the invoice and allows you to download the file to the desktop.</p>
								<h2 className="card_title" style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "left" }}>Created using</h2>
								<div className="padded">
									<p style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>React, HTML, CSS, Material UI</p>
								</div>
								<button className="btn card_btn"><a href="https://github.com/rohinidev-bit/Invoice-Generator" rel="noopener noreferrer" target="_blank">Read More</a></button>
							</div>
						</div>
					</li>
				</ul>
			</div>


		</div>
	)
}