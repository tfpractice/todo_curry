import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';
import Footer from './Footer';
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
const filteredTodos = (f) => (todos) => todos.filter(TODO_FILTERS[f]);

const renderToggleAll = (todos, { completeAll }) => todos.length > 0 && (
	<input className = "toggle-all"
		type = "checkbox"
		checked = { allDone(todos) }
		onChange = { completeAll }/>
);
const renderFooter = ({ todos, actions, visFilter }) => todos.length && (

	<Footer completedCount={completedCount(todos)}
           activeCount={activeCount(todos)}
           filter={visFilter}
           onClearCompleted={actions.clearCompleted}
           onShow={actions.setVisibilityFilter} />
);
// const { todos } = this.props;
// const { filter } = this.state;
// const activeCount = todos.length - completedCount;



// const MS = ({ todos, actions }) => ;
// (
//  <section className="main">
//         {renderToggleAll(completedCount(todos))}
//         <ul className="todo-list">
//           {filteredTodos.map(todo =>
//             <TodoItem key={todo.id} todo={todo} {...actions} />
//           )}
//         </ul>
//         {this.renderFooter(completedCount)}
//       </section>
// );
// export default class MainSection extends Component {

// jscs:disable validateIndentation

class MainSection extends Component {
	static propTypes = {
		todos: PropTypes.array.isRequired,
		actions: PropTypes.object.isRequired,
	}

	state = { filter: SHOW_ALL }

	handleClearCompleted = () => {
		this.props.actions.clearCompleted();
	}

	handleShow = filter => {
		this.setState({ filter });
	}

	renderToggleAll(completedCount) {
		const { todos, actions } = this.props;
		if (todos.length > 0) {
			return (
				<input className="toggle-all"
 					   type="checkbox"
 					   checked={completedCount === todos.length}
 					   onChange={actions.completeAll} />
			);
		}
	}

	renderFooter(completedCount) {
		const { todos } = this.props;
		const { filter } = this.state;
		const activeCount = todos.length - completedCount;

		if (todos.length) {
			return (
				<Footer completedCount={completedCount}
            			activeCount={activeCount}
            			filter={filter}
            			onClearCompleted={this.handleClearCompleted.bind(this)}
            			onShow={this.handleShow.bind(this)} />
			);
		}
	}

	render() {
		const { todos, actions } = this.props;
		const { filter } = this.state;
		console.log('main section Props', this.props);
		const filteredTodos = todos.filter(TODO_FILTERS[filter]);
		const completedCount = todos.reduce((count, todo) =>
			todo.completed ? count + 1 : count,
			0
		);

		return (
			<section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list">
          {filteredTodos.map(todo =>
             <TodoItem key={todo.id} todo={todo} {...actions} />)}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
		);
	}
};

const mapStateToProps = ({ actions, todos, visFilter }) => ({
	completedCount: completedCount(todos),
	activeCount: activeCount(todos),
	allDone: allDone(todos),
	filteredTodos: filteredTodos(visFilter)(todos),
	// renderToggleAll: renderToggleAll(todos, actions),
});

const mapDispatchToProps = (dispatch, { todos, actions }) => {
	return ({ renderToggleAll: renderToggleAll(todos, actions) });
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);