import Button from '../Button/Button';
import './Input.css';
export default function Input({ labelText, placeholderText, onChange, value }) {
	return (
		<div className='input__container'>
			<label htmlFor='search-course'>{labelText}</label>
			<input
				id='search-course'
				type='search'
				value={value}
				placeholder={placeholderText}
				onChange={(e) => onChange(e.target.value)}
			/>
			{/* <Button buttonText='search'></Button> */}
		</div>
	);
}
