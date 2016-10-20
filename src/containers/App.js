import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions';

const App = ({ todos, visFilter, actions }) => (
	<div>
    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} visFilter={visFilter} />
  </div>
);

App.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

const mapStateToProps = ({ todos, visFilter }) => ({ todos, visFilter });

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(
		TodoActions, dispatch), });

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);