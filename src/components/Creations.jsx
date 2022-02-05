import '../styles/Creations.css';
import creationArr from '../images/mobile';
import SingleCreation from './SingleCreation';

function Creations() {
	return (
		<section className="Creations">
			<h3 className="Creations__title">Our creations</h3>
			<div className="Creations__container">
				{creationArr.map(({ title, img }, index) => {
					return <SingleCreation key={index} title={title} img={img} />;
				})}
			</div>
			<a href="#">
				<button className="Creations__seeAll">See all</button>
			</a>
		</section>
	);
}

export default Creations;
