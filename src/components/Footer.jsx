import logo from '../images/logo.svg';
import socialMediaArr from '../images/social_media';

import '../styles/Footer.css';
import SiteLink from './SiteLink';

function Footer() {
	return (
		<footer className="Footer">
			<img src={logo} alt="Loopstudios logo" />
			<Links />
			<SocialMedia />
			<p className="Footer__copyright">
				© 2022 Loopstudios. All rights reserved.
			</p>
		</footer>
	);
}

function Links() {
	return (
		<nav className="Footer__Links">
			<SiteLink href={'#'}>About</SiteLink>
			<SiteLink href={'#'}>Careers</SiteLink>
			<SiteLink href={'#'}>Events</SiteLink>
			<SiteLink href={'#'}>Products</SiteLink>
			<SiteLink href={'#'}>Support</SiteLink>
		</nav>
	);
}

function SocialMedia() {
	return (
		<nav className="Footer__SocialMedia">
			{socialMediaArr.map(({ siteName, img, link }) => {
				return (
					<SiteLink key={siteName} href={link}>
						<img className="Footer__SocialMedia__image" src={img} alt={siteName} />
					</SiteLink>
				);
			})}
		</nav>
	);
}

export default Footer;
