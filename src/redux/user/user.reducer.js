// everything related to users will be here
// The action has an action.type and action.payload  
const INITIAL_STATE = {
    currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return {
                state
            }
    }
}   

export default userReducer