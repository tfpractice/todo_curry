export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const SHOW_ALL = 'show_all';
export const SHOW_COMPLETED = 'show_completed';
export const SHOW_ACTIVE = 'show_active';
export const SET_VIS_FILTER = 'SET_VIS_FILTER';

export const TODO_REDUCERS = new Set(
	[ADD_TODO, DELETE_TODO, EDIT_TODO,
		COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED,
		SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE,
	]);

export const VIS_ACTIONS = new Set([SET_VIS_FILTER, ]);
export const VIS_FILTERS = new Set([SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, ]);