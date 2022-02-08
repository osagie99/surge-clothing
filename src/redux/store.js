import { createStore, applyMiddleware } from "redux";
// import logger middlewear to see every stage of our redux 
import logger from "redux-logger";
// import rootreducer
import rootReducer from "./root-reducer";
// initialize logger as our middleware in an array in order to add other middleware if need be
const middleware = [logger]

// create our store which and and use our rootRducer and applyMiddleware and spread all the middle ware

const store = createStore(rootReducer, applyMiddleware(...middleware))


export default store