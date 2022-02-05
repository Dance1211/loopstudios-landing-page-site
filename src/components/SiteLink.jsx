import { useState } from 'react';
import '../styles/SiteLink.css';

function SiteLink({ href, children }) {
	const [isHovered, setIsHovered] = useState(false);

	const handleHovered = (state) => {
		return () => {
			setIsHovered(() => state);
		};
	};

	return (
		<div
			className="SiteLink"
			onMouseEnter={handleHovered(true)}
			onMouseLeave={handleHovered(false)}
		>
			<a className="SiteLink__link" href={href}>
				{children}
			</a>
			<div
				className={
					isHovered
						? 'SiteLink__cover'
						: 'SiteLink__cover SiteLink__cover--default'
				}
			/>
		</div>
	);
}

export default SiteLink;
