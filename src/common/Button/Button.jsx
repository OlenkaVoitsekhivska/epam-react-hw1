import './Button.css';

export default function Button({ buttonText, onClick }) {
	return <button onClick={onClick}>{buttonText}</button>;
}
