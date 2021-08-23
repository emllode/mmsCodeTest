import React from 'react';

import './sass/SearchSass.scss';

export default function Search(props) {
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
