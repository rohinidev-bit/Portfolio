import "./work.css"
import SC from './images/sc.jpg'
import GP from './images/GP.jpg'
const WorkEX = (props) => {
	return (
		<div>
			<p style={{ color: "#000", "font-family": "Lato, sans-serif", "font-size": "60px", "font-weight": "300" }}> Work Experience</p>

			<div style={{
				padding: "14rem",
			}}>
				<ul class="timeline">
					<div style={{ display: 'inline-block', paddingLeft: ' 4rem' }}>
						<li data-text="08/2016 12/2016" data-year="Echo Magazine"></li>
					</div>
					<div style={{ display: 'inline-block', paddingLeft: '14rem' }}>
						<li data-text="06/2019 07/2019 " data-year="Adept"></li>
					</div>
					<div style={{ display: 'inline-block', paddingLeft: ' 14rem' }}>
						<li data-text="07/2020 08/2020" data-year="Find Mind"></li>
					</div>
					<div style={{ display: 'inline-block', paddingLeft: ' 14rem' }}>
						<li data-text="09/2020 11/2020" data-year="Digital Duet"></li>
					</div>
					<div style={{ display: 'inline-block', paddingLeft: ' 14rem' }}>
						<li data-text="06/2021 Present" data-year="Star Catalysts"></li>
					</div>

				</ul>
			</div>
			<div>
				<p style={{ color: "#222222", "font-family": "Lato, sans-serif", "font-size": "25px", "font-weight": "300", "line-height": "58px", "margin": "0 0 58px" }}> Currently I am working on </p>
				<div className="row">
					<img src={SC} alt="" style={{ height: "20vh", width: "20vh" }} />
					<div class="plus"></div>
					<img src={GP} alt="" style={{ height: "20vh", width: "20vh" }} />

				</div>
			</div>
		</div>

	);
}

export default WorkEX;
