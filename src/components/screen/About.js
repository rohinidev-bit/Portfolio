import React from 'react';
import './about.css'
const Picture = () => {
	return (
		<>
			<div
				style={{}}
			><div class="wrap">
					<div class="about">
						<div class="about-intro">
							<h4>About</h4>
							<h1>Let me introduce myself</h1>
							<div class="intro-details">
								<div class="intro-image">
									<div class="image">
										<img class="image-circle" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAARNAAAAJDg2OGM4NzA4LTk2ODgtNDJhYy1iOWNhLWUwNjk2NDg3ODdmZA.jpg" alt=""></img>
									</div>
								</div>
								<div class="intro-paragraph padding"><p>Lorem ipsum Exercitation culpa qui dolor consequat exercitation fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure sunt id pariatur Duis laboris amet exercitation veniam labore consectetur ea id quis eiusmod.</p></div>
							</div>
						</div>
						<div class="about-info">
							<div class="profile padding">
								<h2>Profile</h2>
								<p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>
								<h3>Fullname:</h3>
								<p>Ieuan Tomos Walker</p>
								<h3>Job:</h3>
								<p>Student</p>
							</div>
							<div class="skills padding">
								<h2>Skills</h2>
								<p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>
								<ul class="skill-bars">
									<li>
										<div class="progress percent90"></div>
										<strong>HTML5</strong>
									</li>
									<li>
										<div class="progress percent85"></div>
										<strong>CSS3</strong>
									</li>
									<li>
										<div class="progress percent70"></div>
										<strong>JQuery</strong>
									</li>
									<li>
										<div class="progress percent95"></div>
										<strong>PHP</strong>
									</li>
									<li>

										<div class="progress percent75"></div>
										<strong>Wordpress</strong>
									</li>

								</ul>


							</div>
						</div>
						<div class="about-buttons padding">
							<div class="hire-me">
								<button class="about-button">Hire me</button>
							</div>
							<div class="download-cv">
								<button class="about-button">Download CV</button>
							</div>
						</div>
					</div>
				</div>

			</div>
		</>
	)
}

export default Picture