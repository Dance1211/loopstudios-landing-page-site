import logo from '../images/logo.svg';
import socialMediaArr from '../images/social_media';

import '../styles/Footer.css';

function Footer() {
	return (
		<footer className="Footer">
			<img src={logo} alt="Loopstudios logo" />
			<Links />
			<SocialMedia />
      <p className="Footer__copyright">© 2022 Loopstudios. All rights reserved.</p>
		</footer>
	);
}

function Links() {
	return (
		<nav className="Footer__Links">
			<a href="#">About</a>
			<a href="#">Careers</a>
			<a href="#">Events</a>
			<a href="#">Products</a>
			<a href="#">Support</a>
		</nav>
	);
}

function SocialMedia() {
	return (
		<nav className="Footer__SocialMedia">
			{socialMediaArr.map(({ siteName, img, link }) => {
				return (
					<a key={siteName} href={link}>
						<img src={img} alt={siteName} />
					</a>
				);
			})}
		</nav>
	);
}

export default Footer;
