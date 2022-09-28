const ScheduleEntry = ({id, course}) => (
    <div id={id}>{course.term} CS {course.title} - {course.meets}</div>
);

export default ScheduleEntry;