import Course from "./Course";

const CourseList = ({courses}) => (
    <div>
        {Object.entries(courses).map(([id, course]) => <Course key={course.number} course={course}></Course>)}
    </div>
);

export default CourseList;