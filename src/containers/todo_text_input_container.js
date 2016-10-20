import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
// <TodoTextInput text={todo.text}
// editing={this.state.editing}
// onSave={(text) => this.handleSave(todo.id, text)} />
// 
// 
const evtTxt = (e) => e.target.value.trim();
const isEnter = ({ which }) => which === 13;
const clearInput = (e) => e.target.value = '';

// const handleSubmit_alt = e => {
// 	console.log('props from handler', this.props);
// 	isEnter(e) && this.props.onSave(evtTxt(e)) && clearInput(e);
// };

const props = ({ onSave, text, placeholder, editing, newTodo, handleSubmit });

const TodoTextInput = ({ onSave, text, placeholder, editing, newTodo, }) => (
	<input className={classnames({ edit: editing, 'new-todo': newTodo, })}
       type="text"
       placeholder={placeholder}
       autoFocus="true"
       value={text}
       onBlur={this.handleBlur}
       onChange={this.handleChange}
       onKeyDown={handleSubmit} />
);

const handleSubmit = e => {
	const text = e.target.value.trim();
	if (e.which === 13) {
		onSave(text);
		if (this.props.newTodo) {
			this.setState({ text: '' });
		}
	}
};

export default class TodoTextInput extends Component {
	static propTypes = {
		onSave: PropTypes.func.isRequired,
		text: PropTypes.string,
		placeholder: PropTypes.string,
		editing: PropTypes.bool,
		newTodo: PropTypes.bool,
	}

	state = { text: this.props.text || '', }

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
                                                                 classnames({ edit: this.props.editing, 'new-todo': this.props.newTodo, })}
                                                                    type="text"
                                                                    placeholder={this.props.placeholder}
                                                                    autoFocus="true"
                                                                    value={this.state.text}
                                                                    onBlur={this.handleBlur}
                                                                    onChange={this.handleChange}
                                                                    onKeyDown={this.handleSubmit} />
		);
	}
};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;