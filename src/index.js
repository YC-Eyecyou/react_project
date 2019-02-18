import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/amazeui.min.css';
import './assets/css/index.css';
import App from './components/App';
import {BrowserRouter,Route} from 'react-router-dom';

import './api/global';

let root = {
	bHeader:true,
	bFooter:true,
	bLoading:false,
	bMore:false
};

window.rc_root = root;
window.bl = false;

ReactDOM.render(
	<BrowserRouter>
		<Route component={App}/>
	</BrowserRouter>
	, 
	document.getElementById('root')
);
