import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import React, { useState } from 'react';
import { Context } from './Context';
import { mockedAuthorsList } from './constants';

function App() {
	const [showCourses, setShowCourses] = useState(true);

	const [context, setContext] = useState({
		authors: mockedAuthorsList,
		filter: '',
	});

	const toggleShowComponent = () => {
		setShowCourses((prevState) => !prevState);
	};

	return (
		<Context.Provider value={[context, setContext]}>
			<div className='App'>
				<Header></Header>
				{showCourses ? (
					<Courses toggleShowComponent={toggleShowComponent}></Courses>
				) : (
					<CreateCourse
						toggleShowComponent={toggleShowComponent}
					></CreateCourse>
				)}
			</div>
		</Context.Provider>
	);
}

export default App;
