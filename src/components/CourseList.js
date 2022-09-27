import Course from "./Course";

const CourseList = ({courses}) => (
    <div className="course-list">
        {Object.entries(courses).map(([id, course]) => <Course key={id} course={course}></Course>)}
    </div>
);

export default CourseList;