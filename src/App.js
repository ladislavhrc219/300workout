import React, {useState} from 'react';
import './App.scss';
// import './styles/navbar.scss';
import Header from './components/header.jsx';
import Navbar from './components/Navbar.jsx';
import WorkoutList from './workoutList/workoutList.jsx';
import WorkoutItem from './workoutList/workoutItem.jsx';
import CreateWorkout from './createWorkoutBlock/createWorkout.jsx';
// import createWorkout from './createWorkoutBlock/createWorkout.jsx';
import {ID} from './helpers/id.js';
// import {Button} from 'reactstrap'
import AddComments from './components/AddComments.jsx';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, reset} from './redux/actions/counter.actions'
// import {isLoggedIn} from './redux/actions/login.action';
// import { Header } from 'semantic-ui-react'


const App = () => {

  const mainCounter =  useSelector(state => state.setsCounter);
  console.log(mainCounter)
  const mainLogin = useSelector(state => state.login);
  console.log(mainLogin)
  // const mainReset = useSelector(state=> state)

  const dispatch = useDispatch();



  // ! redux above 
  const [exercises, setExercises] = useState([]);

  const createSession = (name, sets, reps, date) => {
    const newWKTSession = {id: ID(), name, sets, reps, date};
    const newState = [...exercises];


    newState.push(newWKTSession);
    setExercises(newState);
  }

  return (
    
      <div className="App">
        
        <Navbar />
        <Header />
         
          <CreateWorkout onCreateWorkout={createSession} />
          <WorkoutList>
            {exercises.map(({id, name, sets, reps, date}) => (
                <WorkoutItem key={id}
            name={name} 
            sets={sets}
            reps={reps} 
            date={date}  
            />
              ))}
          </WorkoutList>
         
          <h2 className="redRedux">Number of reps to left to smash: {mainCounter} </h2> 
          <button className="ui inverted red button" onClick={() => dispatch(increment())} > +</button>
          <button className="ui inverted red button" onClick={()=> dispatch(decrement())} >-</button>
          {/* <br></br>  */}
          <button className="ui inverted red button" onClick={()=> dispatch(reset())}> {}Reset</button>

          <AddComments/>

          <h2 className="redRedux">Do not forget to subscribe and hit the like button! Cheers </h2>

          

          {/* <button className="ui primary basic button"> -</button> */}
          {/* <button> - </button> */}
          {/* <h4> Add your comments below:</h4> */}
          
        
        
      </div>
    
  );
}

export default App;
