import { VIS_ACTIONS } from '../constants/ActionTypes';

const VIS_INIT = 'show_all';

export const visFilter = (state = VIS_INIT, { type, curry }) =>
	VIS_ACTIONS.has(type) ? curry(state) : state;