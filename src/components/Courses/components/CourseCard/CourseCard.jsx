import Button from '../../../../common/Button/Button';
import SearchBar from '../SearchBar/SearchBar';

export default function CourseCard({ course }) {
	const { title, description, authors, duration, created } = course;
	return (
		<>
			<SearchBar></SearchBar>
			<div>
				<div>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
				<div>
					<p>
						<b>Authors:</b>
						{authors}
					</p>
					<p>
						<b>Duration:</b>
						{duration}
					</p>
					<p>
						<b>Created:</b>
						{created}
					</p>
					<Button></Button>
				</div>
			</div>
		</>
	);
}
