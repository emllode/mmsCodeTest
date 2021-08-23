import React, { useEffect } from 'react';
import './App.scss';
import Mainpage from './components/Mainpage';
import './components/sass/mixins.scss';
import { keepTheme } from './components/utilities/themes';

function App() {
	useEffect(() => {
		keepTheme();
	});
	return (
		<div className='App'>
			<Mainpage />
		</div>
	);
}

export default App;
