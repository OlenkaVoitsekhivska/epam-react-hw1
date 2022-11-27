import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import { mockedCoursesList as list } from '../../constants';
import { mockedAuthorsList as authorsId } from '../../constants';
import { useEffect, useState } from 'react';

export default function Courses({ toggleShowComponent }) {
	const [courses, setCourses] = useState(list);
	const [authors, setAuthors] = useState(authorsId);
	const [searchInput, setSearchInput] = useState('');
	const searchItems = (e) => {
		setSearchInput(e);
	};
	const courseList = () => {
		if (searchInput) {
			return courses.filter((course) =>
				course.title.toLowerCase().includes(searchInput.toLowerCase())
			);
		}
		return courses;
	};

	return (
		<>
			<SearchBar searchItems={searchItems}></SearchBar>
			<Button
				buttonText='Add new course'
				type='button'
				onClick={toggleShowComponent}
			></Button>
			{courseList().map((course) => (
				<CourseCard
					course={course}
					key={course.id}
					authorsId={authors}
				></CourseCard>
			))}
		</>
	);
}
