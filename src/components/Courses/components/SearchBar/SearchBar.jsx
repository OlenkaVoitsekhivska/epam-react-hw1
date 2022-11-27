import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
import React, { useState, useContext } from 'react';
import { Context } from '../../../../Context';

export default function SearchBar({ searchItems }) {
	const [searchQuery, setSearchQuery] = useState('');
	const [context, setContext] = useContext(Context);

	const registerInput = (searchWord) => {
		setSearchQuery(searchWord);
		if (!searchWord) {
			setContext((prevState) => ({ ...prevState, filter: '' }));
		}
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
