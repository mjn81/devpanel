import { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';

import { LIGHT } from 'src/constants';
import { themeReducer } from './ThemeReducer';

export const CustomThemeProvider = ({ children }) => {
	const [theme, dispatch] = useReducer(themeReducer, LIGHT);
	return (
		<ThemeProvider theme={{ colors: theme, toggler: dispatch }}>
			{children}
		</ThemeProvider>
	);
};
