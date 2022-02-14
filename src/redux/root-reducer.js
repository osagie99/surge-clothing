// import our combine reducers from redux in other to combine redcuers
// every reduce is a function that takes a state(the previous state) and takes an action
// every reducer we write will go into the root reducer 
// so the root reducer won't be bulky if we write all our reducers here
import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";

import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer,
    cart: cartReducer
}); 