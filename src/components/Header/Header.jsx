import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import './Header.css';

const BTN__TEXT = {
	logout: 'Logout',
};

export default function Header() {
	return (
		<nav>
			<Logo></Logo>
			<div className='nav__block'>
				<p>Elenitsa</p>
				<Button buttonText={BTN__TEXT.logout} type='button'></Button>
			</div>
		</nav>
	);
}
