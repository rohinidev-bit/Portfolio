import React from 'react';
import './about.css'
import Resume from './images/Resume.pdf'
const Picture = () => {
	return (
		<div className="master101">
			<div class="wrap">
				<div class="about" >
					<div class="about-intro">
						<p style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "60px", "font-weight": "300", "display": "flex", "justifyContent": "center", "alignSelf": "center" }}> About me</p>
						<div class="intro-details">
							<div class="intro-image">
								{/* <div class="image">
									<img class="image-circle" src="https://nurserynisarga.in/wp-content/uploads/2019/10/Red-Rose.jpg" alt=""></img>
								</div> */}
							</div>
							<div class="intro-paragraph padding"><p style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }} s>I love developing apps and websites, petting my dog and reading philosphy. </p></div>
						</div>
					</div>
					<div class="about-info">
						<div class="profile padding">
							<h2>Profile</h2>
							<p style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>Full Stack Developer </p>
							<h2 >Fullname</h2>
							<p style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>Miss Rohini Verma</p>
						</div>
						<div class="skills padding">
							<h2>Skills</h2>
							<ul class="skill-bars">
								<li>
									<div class="progress percent95"></div>
									<strong style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>JavaScript</strong>
								</li>
								<li>
									<div class="progress percent95"></div>
									<strong style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>React/React Native</strong>
								</li>
								<li>
									<div class="progress percent95"></div>
									<strong style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>Node</strong>
								</li>
								<li>
									<div class="progress percent90"></div>
									<strong style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>HTML5</strong>
								</li>
								<li>
									<div class="progress percent85"></div>
									<strong style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>CSS</strong>
								</li>
								<li>
									<div class="progress percent70"></div>
									<strong style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>DBMS</strong>
								</li>
								<li>
									<div class="progress percent70"></div>
									<strong style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>C++</strong>
								</li>
								<li>
									<div class="progress percent70"></div>
									<strong style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300", "text-align": "justify", "text-justify": "inter-word" }}>Python</strong>
								</li>
							</ul>
						</div>
					</div>
					<div class="about-buttons padding">
						<div class="hire-me">
							<button class="about-button"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=rohiniverma53@gmail.com"><p style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300" }}>Discuss a Project !</p></a>
							</button>
						</div>
						<div class="download-cv">
							<button class="about-button"><a href={Resume} target="_blank"> <p style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "20px", "font-weight": "300" }}>View Resume</p></a></button>
						</div>
					</div>
				</div>
			</div>

		</div>

	)
}

export default Picture