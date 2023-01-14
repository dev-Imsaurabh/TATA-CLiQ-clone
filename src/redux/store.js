import { legacy_createStore ,combineReducers,compose,applyMiddleware} from "redux";
import thunk from "redux-thunk";


//@TODO combine all reducer functions here 
const rootReducer = combineReducers({
//pass all the reducer as key and child
})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))