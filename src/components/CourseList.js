import Course from "./Course";

const CourseList = ({term, courses}) => (
    <div className="course-list">
        {Object.entries(courses).filter(([id, course]) => course.term == term)
            .map(([id, course]) => <Course key={id} course={course}></Course>)}
    </div>
);

export default CourseList;