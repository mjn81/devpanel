import { CHANGE_THEME } from 'src/constants';

export const themeReducer = (
	state: object,
	action: {
		type: string;
		payload: object;
	}
) => {
	switch (action.type) {
		case CHANGE_THEME:
			return action.payload;
		default:
			return state;
	}
};
