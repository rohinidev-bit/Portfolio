import "./work.css"
const WorkEX = (props) => {
	return (
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

	);
}

export default WorkEX;
