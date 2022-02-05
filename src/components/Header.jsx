import logo from '../images/logo.svg';
import hamburger from '../images/icon-hamburger.svg';
import heroImgMobile from '../images/mobile/image-hero.jpg';
import '../styles/Header.css';

function Header() {
	return (
		<header className="Header">
			<img
				className="Header__bgImage"
				src={heroImgMobile}
				alt="Woman wearing a VR headset"
			/>
			<a className="Header__logo" href="#">
				<img src={logo} alt="Logo" />
			</a>
			<button className="Header__navButton">
				<img src={hamburger} alt="Navigation Button" />
			</button>
			<div className="Header__bumperContainer">
				<p className="Header__bumper">IMMERSIVE EXPERIENCES THAT DELIVER</p>
			</div>
		</header>
	);
}

export default Header;
