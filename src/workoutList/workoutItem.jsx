import React from 'react';
import './../styles/workoutItem.css';
import { Badge } from 'reactstrap';

const WorkoutItem = ({name, sets, reps, date}) => 
( <li> 
    <div className='workout-item'> 
    <span className="workout-item__name">{name}</span>
    <span className="workout-item__reps"> {sets} sets </span>
    <span className="workout-item__reps"> {reps} reps </span>
    <span className="workout-item__date"> {date} </span>
    {/* <span className="cross"> ✓ </span> */}
    <span>
    <Badge variant="red"> ✓</Badge>
  </span>
    </div> 
 </li>);

export default WorkoutItem;