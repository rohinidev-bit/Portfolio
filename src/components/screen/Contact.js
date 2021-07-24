import React from 'react';
import "./contact.css"
import LC from './images/lc.png'
const Contact = () => {
	return (
		<div >
			<section>
				<body>
					<div className="container-info" style={{
						"backgroundColor": "#222222",
					}}>

						<section id="contact">

							<div className="row">

								<div className="col">
									<div className="contact-wrapper">
										<div className="direct-contact-container">
											<div className="form-wrapper">
												<ul className="social-media-list">
													<a href="https://github.com/rohinidev-bit" className="contact-icon"><li>
														<img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="" style={{ height: "60px", width: "60px", borderRadius: "50%" }}></img>
													</li>
													</a>
													<a href="https://www.linkedin.com/in/rohini-verma-82962a17a/" className="contact-icon"><li>
														<img src="https://image.flaticon.com/icons/png/512/61/61109.png" alt="" style={{
															height: "60px", width: "60px", borderRadius: "50%"
														}} />
													</li>
													</a>
													<a href="https://leetcode.com/rohini55/" className="contact-icon"><li>
														<img src={LC} alt="" style={{ height: "60px", width: "60px", borderRadius: "50%" }} />
													</li>
													</a>
													<a href="https://mail.google.com/mail/?view=cm&fs=1&to=rohiniverma53@gmail.com" className="contact-icon"><li>
														<img src="https://image.flaticon.com/icons/png/512/60/60543.png" alt="" style={{ height: "60px", width: "60px", borderRadius: "50%" }} />
													</li>
													</a>

													<a href="https://open.spotify.com/user/31uahxg777mu2wrf7cqnohi56qhq" className="contact-icon"><li>
														<img src="https://www.pngrepo.com/png/71558/512/spotify.png" alt="" style={{ height: "60px", width: "60px", borderRadius: "50%" }} />
													</li>
													</a>
													<a href="https://www.instagram.com/rohiniv_/" className="contact-icon"><li>
														<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Black_Instagram_icon.svg/1200px-Black_Instagram_icon.svg.png" alt="" style={{ height: "60px", width: "60px", borderRadius: "50%" }} />
													</li>
													</a>
												</ul>
												<div className="center">
													<p style={{ color: "#fff", "font-family": "Lato, sans-serif", "font-size": "2vw", "font-weight": "300" }}> I would ♡  to hear from you.</p>
												</div>
											</div>
										</div>
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