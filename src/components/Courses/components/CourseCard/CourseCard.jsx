import Button from '../../../../common/Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import { listAuthorsString } from '../../../../helpers/pipeAuthor';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { dateGenerator } from '../../../../helpers/dateGeneratop';
import React, { useContext } from 'react';
import { Context } from '../../../../Context';
import s from './CourseCard.css';

export default function CourseCard({ course, authorsId }) {
	const [context, setContext] = useContext(Context);
	const { title, description, authors, duration, creationDate } = course;

	const findAuthorById = (id) => {
		const author = context.find((author) => author.id === id);
		return author.name;
	};

	const listAuthorsString = (ids) => {
		return ids.map((id) => findAuthorById(id)).join(', ');
	};

	return (
		<div className='container'>
			<div>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div>
				<b>Authors:</b>
				<p>{listAuthorsString(authors)}</p>
				<p>
					<b>Duration: </b>
					{`${pipeDuration(duration)} hours`}
				</p>
				<p>
					<b>Created: </b>
					{dateGenerator(creationDate)}
				</p>
				<Button buttonText='Show course'></Button>
			</div>
		</div>
	);
}
