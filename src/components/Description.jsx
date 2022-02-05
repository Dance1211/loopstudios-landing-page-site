import interactiveImageMobile from '../images/mobile/image-interactive.jpg';
import '../styles/Description.css';
function Description() {
	return (
		<section className="Description">
			<img
				className="Description__image"
				src={interactiveImageMobile}
				alt="Man interacting with a virtual reality headset"
			/>
			<div className="Description__textContainer">
				<h3 className="Description__title">The leader in interactive VR</h3>
				<p className="Description__text">
					Founded in 2011, Loopstudios has been producing world-class virtual
					reality projects for some of the best companies around the globe. Our
					award-winning creations have transformed businesses through digital
					experiences that bind to their brand.
				</p>
			</div>
		</section>
	);
}

export default Description;
