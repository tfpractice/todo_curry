import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

// const Todo = ({ text = '', placeholder, newTodo, editing, onSave }) => ;
// (
// 	<input className={
//                        classnames({ edit: this.props.editing,
//                    'new-todo': newTodo, })}
//                        type="text"
//                        placeholder={placeholder}
//                        autoFocus="true"
//                        value={text}
//                        onBlur={this.handleBlur}
//                        onChange={this.handleChange}
//                        onKeyDown={this.handleSubmit} />
// );


// Todo.propTypes = {
// 	//   onClick: PropTypes.func.isRequired,
// 	//   completed: PropTypes.bool.isRequired,
// 	// text: PropTypes.string.isRequired
// 	onSave: PropTypes.func.isRequired,
// 	text: PropTypes.string,
// 	placeholder: PropTypes.string,
// 	editing: PropTypes.bool,
// 	newTodo: PropTypes.bool,
// };

export default class TodoTextInput extends Component {
	static propTypes = {
		onSave: PropTypes.func.isRequired,
		text: PropTypes.string,
		placeholder: PropTypes.string,
		editing: PropTypes.bool,
		newTodo: PropTypes.bool,
	}

	state = { text: this.props.text || '', }

	handleSubmit = e => {
		const text = e.target.value.trim();
		if (e.which === 13) {
			this.props.onSave(text);
			if (this.props.newTodo) {
				this.setState({ text: '' });
			}
		}
	}

	handleChange = e => {
		this.setState({ text: e.target.value });
	}

	handleBlur = e => {
		if (!this.props.newTodo) {
			this.props.onSave(e.target.value);
		}
	}

	render() {
		return (
			<input className={
                                                      classnames({ edit: this.props.editing,
                                        'new-todo': this.props.newTodo, })}
                                                      type="text"
                                                      placeholder={this.props.placeholder}
                                                      autoFocus="true"
                                                      value={this.state.text}
                                                      onBlur={this.handleBlur}
                                                      onChange={this.handleChange}
                                                      onKeyDown={this.handleSubmit} />
		);
	}
};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;