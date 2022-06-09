import { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';

import { DETAILS, LIGHT } from 'src/constants';
import { themeReducer } from './ThemeReducer';

export const CustomThemeProvider = ({ children }) => {
	const [theme, dispatch] = useReducer(themeReducer, LIGHT); 
	const themeC = { colors: theme, details: DETAILS };	
	return (
		<ThemeProvider theme={{...themeC , toggler: dispatch }}>
			{children}
		</ThemeProvider>
	);
};
