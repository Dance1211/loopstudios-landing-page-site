import '../styles/SingleCreation.css';

function SingleCreation({ title, img }) {
	return (
		<a href="#">
			<div className="SingleCreation">
				<img className="SingleCreation__image" src={img} alt={title} />
				<div className="SingleCreation__shadow" />
				<h3 className="SingleCreation__title">{title}</h3>
			</div>
		</a>
	);
}

export default SingleCreation;
