import React from 'react';
import "./contact.css"
const Contact = () => {
	return (
		<div >
			<section>
				<body>
					<div class="container-info" style={{
						// height: '80vh'
						margin: 0,
						padding: 0,
						"backgroundColor": "#222222",
						"paddingBottom": "100px"
					}}>
						<section id="contact">
							<h1 class="section-header">Contact</h1>
							<div class="contact-wrapper">
								<div class="direct-contact-container">
									<ul class="contact-list">
										<li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">H.No. 85, Atari, Near Nandanvan, Veer Savarkar Nagar, Raipur, Chhattisgarh, 492099</span></i></li>
										<li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:9340995422" title="Give me a call">(91) 9340995422</a></span></i></li>
										<li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:9174067777" title="Give me a call">(91) 9174067777</a></span></i></li>
										<li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:rohiniverma53@gmail.com">hitmeup@gmail.com</a></span></i></li>
									</ul>
									<ul class="social-media-list">
										<a href="https://github.com/rohinidev-bit" class="contact-icon"><li>
											<img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="" style={{ height: "60px", width: "60px", borderRadius: "50%" }}></img>
										</li>
										</a>
										<a href="https://www.linkedin.com/in/rohini-verma-82962a17a/" class="contact-icon"><li>
											<img src="https://image.flaticon.com/icons/png/512/61/61109.png" alt="" style={{
												height: "60px", width: "60px", borderRadius: "50%"
											}} />
										</li>
										</a>

										<a href="#" class="contact-icon"><li>
											<img src="https://image.flaticon.com/icons/png/512/60/60543.png" alt="" style={{ height: "60px", width: "60px", borderRadius: "50%" }} />
										</li>
										</a>

										<a href="https://open.spotify.com/user/31uahxg777mu2wrf7cqnohi56qhq" class="contact-icon"><li>
											<img src="https://www.pngrepo.com/png/71558/512/spotify.png" alt="" style={{ height: "60px", width: "60px", borderRadius: "50%" }} />

										</li>
										</a>
										<a href="https://www.instagram.com/rohiniv_/" class="contact-icon"><li>
											<img src="https://i.pinimg.com/originals/64/c7/c8/64c7c86fd70cb2aea77b49fd340164b3.webp" alt="" style={{ height: "60px", width: "60px", borderRadius: "50%" }} />

										</li>
										</a>
									</ul>
								</div>
							</div>
						</section>
					</div>
				</body>
			</section>
		</div>
	)
}

export default Contact