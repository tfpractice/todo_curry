import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
// import TodoList from '../components/TodoList'

const getVisibleTodos = (filter) => (todos) => {
    console.log(todos);
    // 	switch (filter) {
    // 		case 'SHOW_ALL':
    // 			return todos;
    // 		case 'SHOW_COMPLETED':
    // 			return todos.filter(t => t.completed);
    // 		case 'SHOW_ACTIVE':
    // 			return todos.filter(t => !t.completed);
    // 		default:
	// 			throw new Error('Unknown filter: ' + filter);
	// 	}
};

// const TODO_FILTERS = {
// 	[SHOW_ALL]: () => true,
// 	[SHOW_ACTIVE]: todo => !todo.completed,
// 	[SHOW_COMPLETED]: todo => todo.completed,
// };

// const filteredTodos = todos.filter(TODO_FILTERS[filter]);

const mapStateToProps = ({ todos, visibilityFilter }) => ({ todos: getVisTodos(
		visibilityFilter)(todos), });

// const mapDispatchToProps = ({
//   onTodoClick: toggleTodo
// })

// const VisibleTodoList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList)

// export default VisibleTodoList
