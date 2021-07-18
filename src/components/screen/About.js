import React from 'react';
import './about.css'
const Picture = () => {
	return (
		<div>
			<div class="wrap">
				<div class="about">
					<div class="about-intro">
						<h4>About</h4>
						<div class="intro-details">
							<div class="intro-image">
								<div class="image">
									<img class="image-circle" src="https://nurserynisarga.in/wp-content/uploads/2019/10/Red-Rose.jpg" alt=""></img>
								</div>
							</div>
							<div class="intro-paragraph padding"> <p>I love developing apps and websites, petting my dog and reading philosphy.  </p></div>
						</div>
					</div>
					<div class="about-info">
						<div class="profile padding">
							<h2>Profile</h2>
							<p>I love</p>
							<h3>Fullname:</h3>
							<p>Miss Rohini Verma</p>
							<p>Full Stack Developer</p>
						</div>
						<div class="skills padding">
							<h2>Skills</h2>
							<p> NUlll </p>
							<ul class="skill-bars">
								<li>
									<div class="progress percent95"></div>
									<strong>JavaScript</strong>
								</li>
								<li>
									<div class="progress percent95"></div>
									<strong>React/React Native</strong>
								</li>
								<li>
									<div class="progress percent95"></div>
									<strong>Node</strong>
								</li>
								<li>
									<div class="progress percent90"></div>
									<strong>HTML5</strong>
								</li>
								<li>
									<div class="progress percent85"></div>
									<strong>CSS</strong>
								</li>
								<li>
									<div class="progress percent70"></div>
									<strong>DBMS</strong>
								</li>
								<li>
									<div class="progress percent70"></div>
									<strong>C++</strong>
								</li>
								<li>
									<div class="progress percent70"></div>
									<strong>Python</strong>
								</li>
								<li>
									<div class="progress percent70"></div>
									<strong></strong>
								</li>
							</ul>
						</div>
					</div>
					<div class="about-buttons padding">
						<div class="hire-me">
							<button class="about-button"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=rohiniverma53@gmail.com">Discuss a Project !</a>
							</button>
						</div>
						<div class="download-cv">
							<button class="about-button"><a href="/images/Resume.pdf" download="Rohini's Resume" target="_blank"> Download Resume</a></button>
						</div>
					</div>
				</div>
			</div>

		</div>

	)
}

export default Picture