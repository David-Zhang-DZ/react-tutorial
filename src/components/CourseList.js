import Course from "./Course";

const CourseList = ({term, courses, selected, toggleSelected, profile}) => (
    <div className="course-list">
        {Object.entries(courses).filter(([id, course]) => course.term === term)
            .map(([id, course]) => <Course key={id} id={id} course={course} selected={selected} 
            toggleSelected={toggleSelected} profile={profile}></Course>)}
    </div>
);

export default CourseList;