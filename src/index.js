import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );

// ********** React 18 syntax
const component = document.getElementById('root');
const root = ReactDOMClient.createRoot(component);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
