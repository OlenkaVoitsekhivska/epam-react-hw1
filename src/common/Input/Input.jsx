export default function Input({ labelText, placeholderText, onChange }) {
	return (
		<>
			<label htmlFor=''>{labelText}</label>
			<input type='search' placeholder={placeholderText} onChange={onChange} />
		</>
	);
}
