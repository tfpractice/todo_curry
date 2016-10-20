import React, { Component, PropTypes } from 'react';
import TodoItem from '../components/TodoItem';
import Footer from '../components/Footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';
import { connect } from 'react-redux';

const TODO_FILTERS = {
	[SHOW_ALL]: () => true,
	[SHOW_ACTIVE]: todo => !todo.completed,
	[SHOW_COMPLETED]: todo => todo.completed,
};

const completedCount = (todos) => todos.filter(({ completed }) => completed).length;
const activeCount = (todos) => todos.filter(({ completed }) => !completed).length;
const allDone = (todos) => todos.length === completedCount(todos);
const filteredTodos = ({ visFilter: f, todos }) => todos.filter(TODO_FILTERS[f]);

const renderToggleAll = ({ actions: { completeAll }, todos }) =>
	todos.length > 0 && (
		<input className = "toggle-all"
		type = "checkbox"
		checked = { allDone(todos) }
		onChange = { completeAll }/>
	);
const renderFooter = ({ todos, visFilter, actions }) => todos.length && (
	<Footer completedCount={completedCount(todos)}
           activeCount={activeCount(todos)}
           filter = { visFilter }
           onClearCompleted={actions.clearCompleted}
           onShow={actions.setVisFilter} />
);

const MS_CONTAINER = ({ todos, actions, visFilter, }) => {
	console.log(actions);
	return (
		<section className="main">
        {renderToggleAll({ todos, actions, visFilter })}
        <ul className="todo-list">
          {filteredTodos({ todos, visFilter }).map(todo =>
                        <TodoItem key={todo.id} todo={todo} {...actions} />
                      )}
        </ul>
        {renderFooter({ todos, actions, visFilter })}
      </section>
	);
};

MS_CONTAINER.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};
export default MS_CONTAINER;
// const mapStateToProps = ({ actions, todos, visFilter }) => ({
// 	completedCount: completedCount(todos),
// 	activeCount: activeCount(todos),
// 	allDone: allDone(todos),
// 	filteredTodos: filteredTodos(visFilter)(todos),
// 	// renderToggleAll: renderToggleAll(todos, actions),
// });

// const mapDispatchToProps = (dispatch, { todos, actions, visFilter }) => {
// 	return ({
// 		renderToggleAll: renderToggleAll(actions),
// 		renderFooter: renderFooter({ actions, visFilter }),
// 	});
// };