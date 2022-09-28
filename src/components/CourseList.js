import Course from "./Course";

const CourseList = ({term, courses, selected, toggleSelected}) => (
    <div className="course-list">
        {Object.entries(courses).filter(([id, course]) => course.term === term)
            .map(([id, course]) => <Course key={id} id={id} course={course} selected={selected} toggleSelected={toggleSelected}></Course>)}
    </div>
);

export default CourseList;