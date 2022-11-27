import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import React, { useContext } from 'react';
import { Context } from '../../Context';

import { pipeDuration } from '../../helpers/pipeDuration';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
	mockedAuthorsList as authorsId,
	mockedAuthorsList,
} from '../../constants';
import { mockedCoursesList as courses } from '../../constants';

export default function CreateCourse({ toggleShowComponent }) {
	const handleDelete = (deletedAuthor) => {
		setSelectedAuthors((prevState) => {
			return prevState.filter((author) => author.id !== deletedAuthor.id);
		});
		setAvailableAuthors((prevState) => [...prevState, deletedAuthor]);
	};
	const [context, setContext] = useContext(Context);

	const [availableAuthors, setAvailableAuthors] = useState(context);
	const [selectedAuthors, setSelectedAuthors] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);
	const [addAuthor, setAddAuthor] = useState('');

	const addAuthors = (author) => {
		setSelectedAuthors((prevState) => [...prevState, author]);
		setAvailableAuthors((prevState) => {
			return prevState.filter((prevAuthor) => prevAuthor.id !== author.id);
		});
	};

	const showSelectedAuthors = () => {
		return selectedAuthors.map((author) => (
			<li key={author.id}>
				{author.name}
				<Button
					buttonText='Delete author'
					onClick={() => handleDelete(author)}
				></Button>
			</li>
		));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const newCourse = {
			id: uuidv4(),
			title,
			description,
			creationDate: new Date(Date.now()).toLocaleDateString('en-GB'),
			duration: parseInt(duration),
			authors: selectedAuthors.map(({ id }) => id),
		};
		courses.push(newCourse);
		toggleShowComponent();
	};

	const handleAddAuthor = (e, author) => {
		e.preventDefault();
		if (!author) {
			return;
		}
		const newAuthor = { id: uuidv4(), name: author };
		if (availableAuthors.find((author) => author.name === newAuthor.name)) {
			alert('Author with this name already exists');
			return;
		}
		setContext((prevState) => [...prevState, newAuthor]);
		setAvailableAuthors((prevState) => [...prevState, newAuthor]);
	};

	return (
		<form className='create__container' onSubmit={handleSubmit}>
			<div className='create__title'>
				<Input
					labelText='Title'
					placeholderText='Enter title...'
					onChange={(e) => setTitle(e)}
					value={title}
				></Input>
				<Button
					buttonText='Create course'
					type='submit'
					// onClick={toggleShowComponent}
				></Button>
			</div>
			<label htmlFor='courseDescription'>Description</label>
			<textarea
				name=''
				id='courseDescription'
				cols='30'
				rows='10'
				onChange={(e) => setDescription(e.target.value)}
				minLength={2}
				required
			></textarea>
			<div className='create__author'>
				<h2>Add author</h2>
				<div>
					<Input
						required
						minLength={2}
						value={addAuthor}
						onChange={(e) => setAddAuthor(e)}
					></Input>
					{/* HERE WE ARE CREATING NEW AUTHOR */}
					<Button
						buttonText='Create author'
						type='button'
						onClick={(e) => handleAddAuthor(e, addAuthor)}
					></Button>
				</div>
			</div>

			<div className='create__authorsList'>
				<h2>Authors</h2>
				<ul>
					{availableAuthors.map(({ id, name }) => (
						<li key={id}>
							{name}
							{/* HERE WE ARE ADDING AUTHORS TO COURSE LIST */}
							<Button
								buttonText='Add author'
								type='button'
								onClick={() => addAuthors({ id, name })}
							></Button>
						</li>
					))}
				</ul>
			</div>
			<div className='create__duration'>
				<Input
					labelText='Duration'
					placeholderText='Enter duration in minutes'
					onChange={(e) => setDuration(e)}
					value={duration}
				></Input>
				<p>Duration:{pipeDuration(duration)} hours</p>
			</div>
			<div className='create__courseAuthors'>
				<h2>Course authors</h2>

				{selectedAuthors.length ? (
					showSelectedAuthors()
				) : (
					<p>Author list is empty</p>
				)}
			</div>
		</form>
	);
}
