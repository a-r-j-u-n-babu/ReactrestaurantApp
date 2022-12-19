import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { restaurantListReducer } from './Reducers/restaurantReducer';
// to gernerate middleware

const reducers = combineReducers({  //2nd method
    
    restaurantReducer: restaurantListReducer
    //key :function
    
})
const middleware=[thunk]
const store = createStore(reducers, applyMiddleware(...middleware))// 1st method

export default store