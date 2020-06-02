import {combineReducers} from 'redux';
import CounterReducer from './counter.reducer';
import LoginReducer from './login.reducer';

// export default combineReducers({
//     counter:CounterReducer,
//     login:LoginReducer
// });
// use combine reducers into rootReducer
// in the App.js, with useSelector access the state of the rootreducer
const rootReducers = combineReducers({
    // fake: FakeReducer,
    setsCounter:CounterReducer,
    login:LoginReducer,
    
});

export default rootReducers;