import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import './Header.css';

// const IMG_URL = ''

export default function Header() {
	return (
		<nav>
			<Logo></Logo>
			<div className='nav__block'>
				<p>Elenitsa</p>
				<Button buttonText='Logout'></Button>
			</div>
		</nav>
	);
}
