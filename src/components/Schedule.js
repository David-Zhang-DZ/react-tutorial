import ScheduleEntry from "./ScheduleEntry";

const Schedule = ({courses, selected}) => (
    <div>
        {
         selected.length > 0 ?
         Object.entries(courses).filter(([id, course]) => selected.includes(id))
            .map(([id, course]) => <ScheduleEntry id={id} course={course}/>)
        : <div>You have no courses selected. Click on a course card to select it and add it to your schedule.</div>
        }
    </div>
);

export default Schedule;