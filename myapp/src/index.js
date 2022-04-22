import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';

const currentName = 'Ivan';

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#0028c7'
		}
	},
	status: {
		danger: orange[500],
	},
});

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App name={currentName} topPosition='80px' showRed />
		</ThemeProvider>
		{/*<App name={currentName} topPosition='80px' showRed />*/}
	</React.StrictMode>,
	document.getElementById('root')
);