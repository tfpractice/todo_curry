import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../constants/ActionTypes';
import { COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, SET_VIS_FILTER } from '../constants/ActionTypes';

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

const all = (todos) => [...todos];
const active = (todos) => todos.filter(({ completed }) => !completed);
const completed = (todos) => todos.filter(({ completed }) => completed);

export const show_all = todos => ({ type: SHOW_ALL, curry: all });
export const show_active = todos => ({ type: SHOW_ACTIVE, curry: active });
export const show_completed = todos => ({ type: SHOW_COMPLETED, curry: completed });
export const showVisibleTodos = filter => (todos) => ({});

const TODO_FILTERS = {
	[SHOW_ALL]: todos => show_all(todos),
	[SHOW_ACTIVE]: todo => !todo.completed,
	[SHOW_COMPLETED]: todo => todo.completed,
};
// const all_filter = () => SHOW_ALL;
// const completed_filter = () => SHOW_COMPLETED;
// const active_filter = () => SHOW_ACTIVE;
// const filter_curry = (filter) => (state) => filter;
export const setVisFilter = (filter) =>
	({ type: SET_VIS_FILTER, curry: () => filter });



//
//
//
//
//
//
//
//