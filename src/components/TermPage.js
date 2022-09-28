import { useState } from "react";
import TermSelector from './TermSelector';
import CourseList from "./CourseList";

const TermPage = ({courses}) => {
    const [term, setTerm] = useState('Fall');
    const [selected, setSelected] = useState([]);

    const toggleSelected = (item) => setSelected(
        selected.includes(item)
        ? selected.filter(x => x !== item)
        : [...selected, item]
    );  

    return (
        <>
            <TermSelector term={term} setTerm={setTerm}/>
            <CourseList term={term} courses={courses} selected={selected} toggleSelected={toggleSelected}/>
        </>
    );
}

export default TermPage;