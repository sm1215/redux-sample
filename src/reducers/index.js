import { combineReducers } from 'redux';
import BooksReducer from './reducer-books';

//Reducers provide the value of a piece of state
//combineReducers can be considered the mapping of state
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
