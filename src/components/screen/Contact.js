import React from 'react';
import Head from '../Head/Head'
import "./contact.css"
const Contact = () => {
	return (
		<div >
			<section>
				<body>
					<div class="container-info" style={{
						height: '80vh'
					}}>
						<Head />
					</div>
					<div className="container-main">
						<div class="row">
							<div className="column">
								<div class="gmail"></div>
							</div>
							<div className="column">
								<div class="git"></div>
							</div>
							<div className="column">
								<div class="fb"></div>
							</div>
						</div>
					</div>
				</body>
			</section>
		</div>

	)
}

export default Contact