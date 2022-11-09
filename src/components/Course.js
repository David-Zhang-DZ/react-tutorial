import { Link } from "react-router-dom";
import { useAuthState } from "../utilities/firebase";
import "../App.css";

const Course = ({id, course, selected, toggleSelected, profile}) => {
  console.log(profile);

  return <div className="course card m-1 p-2" 
              data-cy="course"
              onClick={() => toggleSelected(id)}>
    <div className={`card-body ${selected.includes(id) ? 'selected' : ''}`}>
      <h5 className="card-title">{course.term} CS {course.number}</h5>
      <p className="card-text">{course.title}</p>
      <p className="card-text">{course.meets}</p>
      {profile?.isAdmin ? <p><Link to={`/courses/${id}`}>Edit Course</Link></p> : <></>}
    </div>
  </div>
};

export default Course;