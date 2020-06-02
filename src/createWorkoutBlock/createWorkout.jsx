import React from 'react';

import './../styles/createWorkout.css';

// import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

  

const createWorkout = ({onCreateWorkout}) => {
    const onSubmitHandler = event => {
        event.preventDefault();

        const {name,sets, reps, date} = event.target.elements; 

        // console.log(event.target.elements.reps);
        if(name.value && sets.value && reps.value && date.value) {
        onCreateWorkout(name.value, sets.value, reps.value, date.value);
        }
    }

    return (
        <>
        {/* <div className="createWorkout-fields">
        <h2> Type of workout:</h2>
        <h2> Number of sets</h2>
        <h2> Number of reps</h2>
        <h2> DoW</h2>
            </div>  */}

        
           <form onSubmit={onSubmitHandler} className="createWorkout-inputs">
             

           <input type="text" placeholder="Type" name="name"/> 
           <input type="number" placeholder="Sets" name="sets"/> 
           <input type="number" placeholder="Reps" name="reps"/> 
            <input type="date" name="date"/>
            <button className="saveitButton"> Add to workout </button>
            </form>


            
        </>
    )
}

export default createWorkout;