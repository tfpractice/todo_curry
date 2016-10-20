import { combineReducers } from 'redux';
import { todos } from './todos';
import { visFilter } from './filters';

const rootReducer = combineReducers({ todos, visFilter });

export default rootReducer;