import React, { useEffect, useState } from 'react';
import './utilities/ToggleThemes.scss';
import { setTheme } from './utilities/themes';
import Switch from '@material-ui/core/Switch';
function Toggle() {
	const [togClass, setTogClass] = useState('light');
	const [state, setState] = React.useState({
		checkedA: true,
		checkedB: true,
	});
	let theme = localStorage.getItem('theme');

	useEffect(() => {
		if (localStorage.getItem('theme') === 'theme-dark') {
			setTogClass('dark');
		} else if (localStorage.getItem('theme') === 'theme-light') {
			setTogClass('light');
		}
	}, [theme]);

	const handleOnClick = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
		if (localStorage.getItem('theme') === 'theme-dark') {
			setTheme('theme-light');
			setTogClass('light');
		} else {
			setTheme('theme-dark');
			setTogClass('dark');
		}
	};

	return (
		<div>
			<Switch
				checked={state.checkedA}
				onChange={handleOnClick}
				className='toggle--checkbox'
				name='checkedA'
				inputProps={{ 'aria-label': 'primary checkbox' }}
			/>
		</div>
	);
}

export default Toggle;
