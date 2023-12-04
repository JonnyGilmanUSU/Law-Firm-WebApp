import logoImage from '../../assets/images/logo.png';
import './Header.css';
import Navigation from './Navigation';

function Header() {
    return(

        <div id="header">
		<div className="clearfix">
			<div className="logo">
				<a href="index.html"><img src={logoImage} alt="LOGO" height="52" width="362" /></a>
			</div>
			<Navigation />
		</div>
	</div>
    );
}

export default Header;