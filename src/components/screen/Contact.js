import React from 'react';
import "./contact.css"
import LC from './images/lc.png'
const Contact = () => {
	return (
		<div >
			<section>
				<body>
					<div class="container-info" style={{
						// height: '80vh'
						"backgroundColor": "#222222",
						"paddingBottom": "100px"
					}}>
						<section id="contact">
							<p style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "60px", "font-weight": "300" }}> Here's how to reach me!</p>
							<div className="row">

								<div class="direct-contact-container">
									<div className="form-wrapper">
										<p style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "35px", "font-weight": "300" }}> I would <br /> ♡  <br />to hear from you.</p></div>
								</div>
								<div class="contact-wrapper">
									<div class="direct-contact-container">
										<ul class="contact-list">
											<li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place"><p style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "25px", "font-weight": "300" }}> H.No. 85, Atari, Near Nandanvan, Veer Savarkar Nagar, Raipur, Chhattisgarh, 492099 </p></span></i></li>
											<li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:9340995422" title="Give me a call"><p style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "25px", "font-weight": "300" }}> (91) 9340995422 </p></a></span></i></li>
											<li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:9174067777" title="Give me a call"><p style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "25px", "font-weight": "300" }}> (91) 9174067777</p></a></span></i></li>
											<li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:rohiniverma53@gmail.com"><p style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "25px", "font-weight": "300" }}> rohiniverma53@gmail.com</p></a></span></i></li>
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
											<a href="https://leetcode.com/rohini55/" class="contact-icon"><li>
												<img src={LC} alt="" style={{ height: "60px", width: "60px", borderRadius: "50%" }} />
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
												<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Black_Instagram_icon.svg/1200px-Black_Instagram_icon.svg.png" alt="" style={{ height: "60px", width: "60px", borderRadius: "50%" }} />
											</li>
											</a>
										</ul>
									</div>
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