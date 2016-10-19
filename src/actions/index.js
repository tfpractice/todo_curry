import {
	ADD_TODO,
	DELETE_TODO,
	EDIT_TODO,
	COMPLETE_TODO,
	COMPLETE_ALL,
	CLEAR_COMPLETED
} from '../constants/ActionTypes'

const TODO_REDUCERS = new Set([ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO,
	COMPLETE_ALL, CLEAR_COMPLETED
]);

export const addTodo = text => ({ type: ADD_TODO, text })
export const deleteTodo = id => ({ type: DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: EDIT_TODO, id, text })
export const completeTodo = id => ({ type: COMPLETE_TODO, id })
export const completeAll = () => ({ type: COMPLETE_ALL })
export const clearCompleted = () => ({ type: CLEAR_COMPLETED })

const { max } = Math;

const nextID = (arr = []) => arr.reduce((mId, { id }) => max(id, mId), -1) + 1

const add = (text = '', completed = false) => (todos = []) =>
	todos.concat({ text, completed, id: nextID(todos) })

const rmTodo = ({ id: xID }) => (todos = []) =>
	todos.filter(({ id }) => id !== xID);

const edit = ({ id: eID, text }) => (todos = []) =>
	todos.map(t => t.id === eID ? ({...t, text }) : t)

const complete = ({ id, completed }) => (todos = []) =>
	todos.map(t => t.id === id ? {...t, completed: !t.completed } : t);

const complete_All = (todos = []) => todos.map(t => ({...t, completed: true }))

const clear_completed = (todos = []) =>
	todos.filter(({ completed }) => !completed)