import {createStore, applyMiddleware, compose, combineReducers} from  'redux'
import thunk from "redux-thunk";
import customersQueueReducer from "./reducers/CustomersQueueReducer";

const rootReducer = combineReducers({
    customers:customersQueueReducer
})

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export  default store

export type RootState = ReturnType<typeof rootReducer>;