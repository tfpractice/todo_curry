const completedCount = (todos) => todos.filter(({ completed } => completed)).length;
const activeCount = (todos) => todos.filter(({ completed } => !completed)).length;
const Footer = ({ todos, visFilter, actions }) => {
	todos.length &&
		(
			<Footer completedCount={completedCount(todos)}
                activeCount={activeCount(todos)}
                filter={filter}
                onClearCompleted={actions.clearCompleted}
                onShow={this.handleShow.bind(this)} />
		);
};