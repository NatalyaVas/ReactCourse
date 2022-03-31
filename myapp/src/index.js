import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const currentName = 'Ivan';

ReactDOM.render(
	<React.StrictMode>
		<App name={currentName} topPosition='80px' showRed />
		{/*<App name={currentName} topPosition='80px' showRed />*/}
	</React.StrictMode>,
	document.getElementById('root')
);