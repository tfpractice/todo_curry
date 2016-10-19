import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from '../constants/ActionTypes'
const TODO_REDUCERS = [ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO,
  COMPLETE_ALL, CLEAR_COMPLETED
];
const { max } = Math;
const initialState = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}]
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

// const addAction = ()

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [{
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) +
            1,
          completed: false,
          text: action.text
        },
        ...state
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ? {...todo, text: action.text } :
        todo
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ? {...todo, completed: !todo.completed } :
        todo
      )

    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}