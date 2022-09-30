const days = ['M', 'Tu', 'W', 'Th', 'F'];

export const hasConflict = (course, selected) => (
    selected.some(selection => courseConflict(course, selection))
);

const parseMeets = (meet) => {
    const [meetDays, meetHours] = meet.split(' ');
    const [start, end] = meetHours.split('-');
    const [startHH, startMM] = start.split(':');
    const [endHH, endMM] = end.split(':');

    return {
        days: days.filter(day => meetDays.search(day) !== -1),
        hours: {
          start: startHH * 60 + startMM * 1,
          end: endHH * 60 + endMM * 1
        }
      }
};

const daysOverlap = (days1, days2) => ( 
    days.some(day => days1.includes(day) && days2.includes(day))
  );
  
  const hoursOverlap = (hours1, hours2) => (
    Math.max(hours1.start, hours2.start) < Math.min(hours1.end, hours2.end)
  );
  
  const timeConflict = (course1, course2) => {
    const course1Time = parseMeets(course1.meets);
    const course2Time = parseMeets(course2.meets);

    return daysOverlap(course1Time.days, course2Time.days) 
        && hoursOverlap(course1Time.hours, course2Time.hours)
  };
  
  const courseConflict = (course1, course2) => (
    course1.term === course2.term
    && timeConflict(course1, course2)
  );