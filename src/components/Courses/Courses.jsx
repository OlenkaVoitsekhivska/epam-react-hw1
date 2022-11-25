import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList as list } from '../../constants';

export default function Courses() {
	return (
		<>
			{list.map((course) => (
				<CourseCard course={course} key={course.id}></CourseCard>
			))}
		</>
	);
}
