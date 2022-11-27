import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
import { useState } from 'react';

export default function SearchBar({ searchItems }) {
	const [searchQuery, setSearchQuery] = useState('');
	const registerInput = (searchWord) => {
		setSearchQuery(searchWord);
		console.log(searchQuery);
	};
	return (
		<>
			<Input onChange={registerInput}></Input>
			<Button
				buttonText='search'
				onClick={() => searchItems(searchQuery)}
			></Button>
		</>
	);
}
