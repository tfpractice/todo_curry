import { TODO_REDUCERS } from '../constants/ActionTypes';

const TODO_INIT = [{ text: 'Use Redux', completed: false, id: 0 }];

export const todos = (state = TODO_INIT, { type, curry }) =>
	TODO_REDUCERS.has(type) ? curry(state) : state;