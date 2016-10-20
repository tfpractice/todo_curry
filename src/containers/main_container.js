const TODO_FILTERS = {
	[SHOW_ALL]: () => true,
	[SHOW_ACTIVE]: todo => !todo.completed,
	[SHOW_COMPLETED]: todo => todo.completed,
};


MainSection.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};
const completedCount = (todos) => todos.filter(({ completed } => completed)).length;
const activeCount = (todos) => todos.filter(({ completed } => !completed)).length;
const allDone = (todos) => todos.length === completedCount(todos);
const filteredTodos = (todos) => todos.filter(TODO_FILTERS[filter]);
const renderToggleAll = (todos) => todos.length > 0 && (
	<input className = "toggle-all"
		type = "checkbox"
		checked = { allDone(todos) }
		onChange = { actions.completeAll }/>
);


return ( <
	section className = "main" > { renderToggleAll(todos) } <
	ul className = "todo-list" > {
		filteredTodos.map(todo =>
			<
			TodoItem key = { todo.id }
			todo = { todo } {...actions }
			/>
		)
	} <
	/ul> { this.renderFooter(completedCount) } < /
	section >
);

const mapStateToProps = ({ actions, todos }) => ({
	completedCount: completedCount(todos),
	activeCount: activeCount(todos),
	allDone: allDone(todos),
	filteredTodos: filteredTodos(todos),
	renderToggleAll: renderToggleAll(todos),
});

const MainSection = ({ todos, visFilter, actions }) => {

}


// state = { filter: SHOW_ALL }

// // handleClearCompleted = () => {
// // 	actions.clearCompleted();
// // }

// // handleShow = filter => {
// // 	this.setState({ filter });
// // }



// renderFooter(completedCount) {
// 	const { todos } = this.props;
// 	const { filter } = this.state;
// 	const activeCount = todos.length - completedCount;

// 	if (todos.length) {
// 		return (
// 			<Footer completedCount={completedCount}
//                                                  activeCount={activeCount}
//                                                  filter={filter}
//                                                  onClearCompleted={this.handleClearCompleted.bind(this)}
//                                                  onShow={this.handleShow.bind(this)} />
// 		);
// 	}
// }

// render() {
// 	const { todos, actions } = this.props;
// 	const { filter } = this.state;

// 	const filteredTodos = todos.filter(TODO_FILTERS[filter]);
// 	const completedCount = todos.reduce((count, todo) =>
// 		todo.completed ? count + 1 : count,
// 		0
// 	);

// 	return (
// 		<section className="main">
//         {renderToggleAll(todos)}
//         <ul className="todo-list">
//           {filteredTodos.map(todo =>
//                                   <TodoItem key={todo.id} todo={todo} {...actions} />
//                                 )}
//         </ul>
//         {this.renderFooter(completedCount)}
//       </section>
// 	);
// }
// };;;;;;;;;;;;;;;;;;;;