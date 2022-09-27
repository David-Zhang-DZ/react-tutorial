const Course = ({course}) => (
    <div key={course.number}>
        {course.term} CS {course.number}: {course.title}
    </div>
);

export default Course;