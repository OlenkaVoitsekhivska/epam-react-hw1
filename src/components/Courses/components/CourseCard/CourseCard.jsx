import Button from '../../../../common/Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import { mockedAuthorsList as authorsList } from '../../../../constants';

export default function CourseCard({ course }) {
	const { title, description, authors, duration, created } = course;
	const findAuthorName = (id) => {
		return authorsList.filter((author) => {
			console.log('call from abyss', author.id === id ? author.name : '');
			return author.id === id ? author.name : '';
		});
	};

	return (
		<>
			<SearchBar></SearchBar>
			<div>
				<div>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
				<div>
					<b>Authors:</b>
					
					{/* <p>{authors.map((author) => findAuthorName(author))}</p> */}
					<p>
						<b>Duration:</b>
						{duration}
					</p>
					<p>
						<b>Created:</b>
						{created}
					</p>
					<Button buttonText='Show course'></Button>
				</div>
			</div>
		</>
	);
}
