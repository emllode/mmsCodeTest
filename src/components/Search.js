import React from 'react';

import './sass/SearchSass.scss';

export default function Search(props) {
	return (
		<form className='search'>
			<div class='search__input'>
				<input type='text' name='agentName' />
			</div>
			<div className='search__buttons'>
				<button>Search</button>
			</div>
		</form>
	);
}
