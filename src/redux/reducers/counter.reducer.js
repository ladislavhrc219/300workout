// const INITIAL_STATE = {
//     currentCount: 0
// }

// can console.log the state throguth the reducers
// const CounterReducer = (state = 'fa', action) => {
const CounterReducer = (state = 300, action) => {
    switch(action.type) {
        case 'INCREMENT': 
            return state + 1;
        case 'DECREMENT': 
            return state - 1;
        case 'RESET': 
            return state = 300 ;
        default:
            return state;
    };
};

export default CounterReducer;