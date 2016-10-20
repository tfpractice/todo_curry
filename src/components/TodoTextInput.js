import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// const mapDispatchToProps = dispatch => ({
// 	actions: bindActionCreators(
// 		TodoActions, dispatch),
// });
// 
const evtTxt = (e) => e.target.value.trim();
const isEnter = ({ which }) => which === 13;
const clearInput = (e) => e.target.value = '';

const handleSubmit_alt = e => {
	// console.log('props from handler', this.props);
	isEnter(e) && this.props.onSave(evtTxt(e)) && clearInput(e);
};

class TodoTextInput extends Component {
	static propTypes = {
		onSave: PropTypes.func.isRequired,
		text: PropTypes.string,
		placeholder: PropTypes.string,
		editing: PropTypes.bool,
		newTodo: PropTypes.bool,
	}

	state = { text: this.props.text || '', }

	handleSubmit = e => {
		isEnter(e) && this.props.onSave(evtTxt(e)) && clearInput(e);
		// if (e.which === 13) {
		// 	this.props.onSave(text);
		// 	if (this.props.newTodo) {
		// 		this.setState({ text: '' });
		// 	}
		// }
	}

	handleChange = e => {
		this.setState({ text: e.target.value });
	}

	handleBlur = e => {
			if (!this.props.newTodo) {
				this.props.onSave(e.target.value);
			}
		}
		// jscs:disable validateIndentation
	render() {
		// console.log('state', this.state);
		return (
			<input className ={classnames({ edit: this.props.editing, 'new-todo': this.props.newTodo, })                                  }
                   type = 'text'
                   placeholder = { this.props.placeholder }
                   autoFocus = 'true'
                   value = { this.props.text }
                   onBlur = { this.handleBlur }
                   onChange = { this.handleChange }
                   onKeyDown = { this.handleSubmit }  />
		);
	}
};
// const evtTxt = (e) => e.target.value.trim();
// const isEnter = ({ which }) => which === 13;
// const clearInput = (e) => e.target.value = '';

// const handleSubmit_alt = e => {
// 	isEnter(e) && this.props.onSave(evtTxt(e)) && clearInput(e);
// };

const mapStateToProps = (state) => ({
	newProp: 'i am a new prop',
	handleSubmit: handleSubmit_alt,
});

// const mapDispatchToProps = ({});
export default connect(mapStateToProps
	// mapDispatchToProps
)(TodoTextInput);