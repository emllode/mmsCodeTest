import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './sass/SearchSass.scss';

export default function Search(props) {
	const [state, setState] = useState('');
	const { REACT_APP_ACCESS_KEY } = process.env;

	// useEffect(() => {
	// 	Searchpage();
	// }, []);

	const Searchpage = async (e) => {
		const fetchImages = async () => {
			props.setImages('');

			const { data } = await axios(
				`https://api.unsplash.com/search/photos/?client_id=${REACT_APP_ACCESS_KEY}&query=${state}
				`
			);
			props.setImages(data);
		};
		fetchImages();
	};

	console.log(state + 'heelo');
	return (
		<form className='search' onClick={Searchpage}>
			<div class='search__input'>
				<input
					type='text'
					name='search'
					value={state}
					onChange={(e) => setState(e.target.value)}
				/>
			</div>
			<div className='search__buttons'>
				<button>Search</button>
			</div>
		</form>
	);
}
