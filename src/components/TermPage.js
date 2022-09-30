import { useState } from "react";
import TermSelector from './TermSelector';
import CourseList from "./CourseList";
import Modal from "./Modal";
import Schedule from "./Schedule";
import { hasConflict } from "../utilities/time";

const TermPage = ({courses}) => {
    const [term, setTerm] = useState('Fall');
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const toggleSelected = (item) => {
        if(selected.includes(item) || !hasConflict(courses[item], Object.entries(courses)
            .filter(([id, course]) => selected.includes(id))
            .map(([id, course]) => course)))
        setSelected(
            selected.includes(item)
            ? selected.filter(x => x !== item)
            : [...selected, item]
        )
    };  

    return (
        <>
            <div className="d-flex">
                <TermSelector term={term} setTerm={setTerm}/>
                <ScheduleButton openModal={openModal}/>
            </div>
            
            <Modal open={open} close={closeModal}>
                <Schedule courses={courses} selected={selected}/>
            </Modal>
            <CourseList term={term} courses={courses} selected={selected} toggleSelected={toggleSelected}/>
        </>
    );
}

const ScheduleButton = ({openModal}) => (
    <div>
        <button id="scheduleButton" className="btn btn-dark" onClick={() => openModal()} >View Schedule</button>
    </div>
);

export default TermPage;