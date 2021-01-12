//1 import functions to create store and combine reducers
import {createStore, combineReducers} from 'redux';

//Step 4: import reducers
import {todos} from './todos/reducers'
//2. create reducers object 
const reducers = {
    todos,
};

// 3. combine reducers and store them in a single const
const rootReducer = combineReducers(reducers);


// 4. put reducers in a form through which it can be passed to createStore
export const configureStore = () => createStore(rootReducer);
