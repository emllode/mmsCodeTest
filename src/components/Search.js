import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import './sass/SearchSass.scss';

export default function Search(props) {
	return (
		<form className='search'>
			<div class='search__input'>
				<SearchIcon />
				<input
					type='search'
					name='search'
					value={props.query}
					onChange={props.queryFilterOnChange}
				/>
			</div>
		</form>
	);
}
