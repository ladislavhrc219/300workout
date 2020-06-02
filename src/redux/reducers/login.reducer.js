// const INITIAL_STATE = {
//     isLoggedIn: false
//     //  isloggedIn   fun part
// }

const LoginReducer = (state = false, action) => {
    switch(action.type){
        case 'LOGIN':
        return !state;
        default:
            return state;
            // console.log('yooo')
    };
};

export default LoginReducer;   