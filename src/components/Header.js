import React, { PropTypes } from 'react';
import TodoTextInput from './TodoTextInput';

const Header = ({ addTodo }) => (
	<header className="header">
        <h1>todos</h1>
        <TodoTextInput newTodo
                      onSave={(text)=> text.length !== 0 && addTodo(text)}
                      placeholder="What needs to be done?" />
      </header>
);

Header.propTypes = { addTodo: PropTypes.func.isRequired };

export default Header;