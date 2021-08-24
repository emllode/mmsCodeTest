import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './sass/SearchSass.scss';

export default function Search(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (event) => {
		const { myValue } = event.currentTarget.dataset;
		props.setColor(myValue);
		props.fetchcolor(myValue);
		console.log(myValue);
		setAnchorEl();
	};

	console.log(anchorEl);

	return (
		<div className='search'>
			{props.query < 1 ? (
				<form className='search'>
					<div class='search__input'>
						<input
							type='search'
							name='search'
							value={props.query}
							onChange={props.queryFilterOnChange}
						/>
					</div>
				</form>
			) : (
				<form className='search'>
					<div class='search__input'>
						<input
							type='search'
							name='search'
							value={props.query}
							onChange={props.queryFilterOnChange}
						/>

						<button
							aria-controls='simple-menu'
							aria-haspopup='true'
							className={'colorLensIcon'}
							onClick={handleClick}
							style={{ paddingRight: '10px' }}
						>
							color
						</button>
						<Menu
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose} data-my-value={'black&white'}>
								Black & White
							</MenuItem>
							<MenuItem onClick={handleClose} data-my-value={'red'}>
								Red
							</MenuItem>
							<MenuItem onClick={handleClose} data-my-value={'blue'}>
								Blue
							</MenuItem>
							<MenuItem onClick={handleClose} data-my-value={'white'}>
								White
							</MenuItem>
							<MenuItem onClick={handleClose} data-my-value={'black'}>
								Black
							</MenuItem>
							<MenuItem onClick={handleClose} data-my-value={'orange'}>
								Orange
							</MenuItem>
							<MenuItem onClick={handleClose} data-my-value={'green'}>
								Green
							</MenuItem>
							<MenuItem onClick={handleClose} data-my-value={'red'}>
								Red
							</MenuItem>
							<MenuItem onClick={handleClose} data-my-value={'blue'}>
								Blue
							</MenuItem>
						</Menu>
					</div>
				</form>
			)}
		</div>
	);
}
