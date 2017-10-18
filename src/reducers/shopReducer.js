export default function shopReducer(state=[], action) {
	switch(action.type) {
		case 'ADD_TO_CART':
			return [ ...state, Object.assign({}, action.product) ];

		default:
			return state;
	}
}
