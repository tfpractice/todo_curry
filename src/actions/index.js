import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../constants/ActionTypes';
import { COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes';

const { max } = Math;
const nextID = (arr = []) => arr.reduce((mId, { id }) => max(id, mId), -1) + 1;
const add = (text = '', completed = false) => (todos = []) =>
	[{ text, completed, id: nextID(todos) }].concat(todos);

const rmTodo = (xID) => (todos = []) => todos.filter(({ id }) => id !== xID);

const edit = (eID, text) => (todos = []) =>
	todos.map(t => t.id === eID ? ({...t, text }) : t);

const complete = (id) => (todos = []) =>
	todos.map(t => t.id === id ? {...t, completed: !t.completed } : t);
const allMarked = (todos = []) => todos.every(({ completed }) => completed);
const complete_All = (todos = []) =>
	todos.map(t => ({...t, completed: !allMarked(todos) }));

const clear_completed = (todos = []) =>
	todos.filter(({ completed }) => !completed);

export const addTodo = text => ({ type: ADD_TODO, curry: add(text) });
export const deleteTodo = id => ({ type: DELETE_TODO, curry: rmTodo(id) });
export const editTodo = (id, text) => ({ type: EDIT_TODO, curry: edit(id, text) });
export const completeTodo = id => ({ type: COMPLETE_TODO, curry: complete(id) });
export const completeAll = () => ({ type: COMPLETE_ALL, curry: complete_All });
export const clearCompleted = () => ({ type: CLEAR_COMPLETED, curry: clear_completed });

//
//