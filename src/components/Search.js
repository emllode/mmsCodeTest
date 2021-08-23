import React, { useState, useEffect } from 'react';
import Mainpage from './Mainpage';

import './sass/SearchSass.scss';

export default function Search(props) {
	const [state, setState] = useState('');

	// const Searchpage = async (e) => {
	// 	props.setImages('');

	// 	const { data } = await axios.get(
	// 		`https://api.unsplash.com/search/photos/?client_id=${REACT_APP_ACCESS_KEY}&query=${state}
	// 			`
	// 	);
	// 	console.log(data);
	// 	props.setImages(data);
	// };

	console.log(state + 'heelo');
	return (
		<form className='search'>
			<div class='search__input'>
				<input
					type='text'
					name='search'
					value={props.query}
					onChange={props.queryFilterOnChange}
				/>
			</div>
			<div className='search__buttons'>
				<button onClick={props.Searchpage}>Search</button>
			</div>
		</form>
	);
}
