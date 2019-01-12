import { combineReducers } from 'redux';
import books from './books';
import todos from './todos';

export default combineReducers({
    books,
    todos
});