import React from 'react';
import './about.css'
import Resume from './images/Resume.pdf'
const Picture = () => {
	return (
		<div className="master101">
			<div className="wrap">
				<h1 class="list--title"><p style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "3.5em", "font-weight": "300", "display": "flex", "justifyContent": "center", "alignSelf": "center" }}> About me</p></h1>
				<div className="about" >
					<div className="about-intro">
						<div className="intro-details">
							<div className="intro-paragraph padding"><p style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "340", "text-align": "justify", "text-justify": "inter-word" }} s>I am a tireless seeker of knowledge, occasional purveyor of wisdom and also, coincidentally, a graphic designer and a developer. So far, I have worked in domains of digital marketing, graphic designing, app development and web development. I live in Raipur, Chhattisgarh.  I love developing apps and websites, petting my dog and reading philosophical fiction. My favourite authors include
								Fyodor Dostoyevsky, Albert Camus and Charles Bukowski. <br />In as circuitous a reason as a philosopher is wont to offer, my school of thought is reliant on schooling my thought – thoroughly, regularly; keeping abreast of design, branding, advertising trends and solutions.<br /> Perpetually learning and evolving. </p></div>
						</div>
					</div>
					<div className="about-info">
						<div className="profile padding">
							<h2>Profile</h2>
							<p style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>Software Engineer</p>
							<h2 >Fullname</h2>
							<p style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>Miss Rohini Verma</p>
						</div>
						<div className="skills padding">
							<h2>Skills</h2>
							<ul className="skill-bars">
								<li>
									<div className="progress percent95"></div>
									<strong style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>JavaScript</strong>
								</li>
								<li>
									<div className="progress percent90"></div>
									<strong style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>React</strong>
								</li>
								<li>
									<div className="progress percent95"></div>
									<strong style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>React Native</strong>
								</li>
								<li>
									<div className="progress percent95"></div>
									<strong style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>Node</strong>
								</li>
								<li>
									<div className="progress percent95"></div>
									<strong style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>Illustrator</strong>
								</li>
								<li>
									<div className="progress percent95"></div>
									<strong style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>Photoshop</strong>
								</li>
								<li>
									<div className="progress percent90"></div>
									<strong style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>HTML5</strong>
								</li>
								<li>
									<div className="progress percent85"></div>
									<strong style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>CSS</strong>
								</li>
								<li>
									<div className="progress percent70"></div>
									<strong style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>DBMS</strong>
								</li>
								<li>
									<div className="progress percent70"></div>
									<strong style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>C++</strong>
								</li>
								<li>
									<div className="progress percent70"></div>
									<strong style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>Python</strong>
								</li>
							</ul>
						</div>
					</div>
					<div className="about-buttons padding">
						<div className="hire-me">
							<button className="about-button"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=rohiniverma53@gmail.com"><p style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "340" }}>Hire me</p></a>
							</button>
						</div>
						<div className="download-cv">
							<button className="about-button"><a href={Resume} target="_blank" without rel="noreferrer"> <p style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300" }}>View Resume</p></a></button>
						</div>
					</div>
				</div>
			</div>

		</div>

	)
}

export default Picture