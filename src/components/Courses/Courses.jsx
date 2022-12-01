import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import { mockedCoursesList as list } from '../../constants';
import { useContext, useState } from 'react';
import { Context } from '../../Context';
import s from './Courses.module.css';

const BTN__TEXT = {
	addNewCourse: 'Add new course',
};

export default function Courses({ toggleShowComponent }) {
	const [courses, setCourses] = useState(list);
	const [context, setContext] = useContext(Context);
	const searchItems = (query) => {
		setContext((prevState) => ({ ...prevState, filter: query }));
	};

	const courseList = () => {
		const { filter } = context;
		if (filter) {
			return courses.filter(
				(course) =>
					course.title.toLowerCase().includes(filter.toLowerCase()) ||
					course.id.includes(filter)
			);
		}
		return courses;
	};

	return (
		<div className='courses'>
			<div className={s.searchCourse__wrapper}>
				<div className={s.searchCourse__input}>
					<SearchBar searchItems={searchItems}></SearchBar>
				</div>
				<Button
					buttonText={BTN__TEXT.addNewCourse}
					type='button'
					onClick={toggleShowComponent}
				></Button>
			</div>
			{courseList().map((course) => (
				<CourseCard course={course} key={course.id}></CourseCard>
			))}
		</div>
	);
}
