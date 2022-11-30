import Button from '../../../../common/Button/Button';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { dateGenerator } from '../../../../helpers/dateGeneratop';
import React, { useContext } from 'react';
import { Context } from '../../../../Context';
import './CourseCard.css';

const BTN__TEXT = {
	showCourse: 'Show course',
};

export default function CourseCard({ course }) {
	const [context, setContext] = useContext(Context);
	const { title, description, authors, duration, creationDate } = course;

	const findAuthorById = (id) => {
		const author = context.authors.find((author) => author.id === id);
		return author.name;
	};

	const listAuthorsString = (ids) => {
		return ids.map((id) => findAuthorById(id)).join(', ');
	};

	return (
		<div className='card__container'>
			<div className='card__left'>
				<h2>{title}</h2>
				<p className='course__description'>{description}</p>
			</div>
			<div className='card__right'>
				<p className='card__authors'>
					<b>Authors: </b>
					{listAuthorsString(authors)}
				</p>
				<p>
					<b>Duration: </b>
					{`${pipeDuration(duration)} hours`}
				</p>
				<p>
					<b>Created: </b>
					{dateGenerator(creationDate)}
				</p>
				<Button buttonText={BTN__TEXT.showCourse} type='button'></Button>
			</div>
		</div>
	);
}
