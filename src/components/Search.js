import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ColorLensIcon from '@material-ui/icons/ColorLens';
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
						<SearchIcon style={{ paddingLeft: '10px' }} />
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
						<SearchIcon style={{ paddingLeft: '10px' }} />
						<input
							type='search'
							name='search'
							value={props.query}
							onChange={props.queryFilterOnChange}
						/>

						<ColorLensIcon
							aria-controls='simple-menu'
							aria-haspopup='true'
							className={'colorLensIcon'}
							onClick={handleClick}
							style={{ paddingRight: '10px' }}
						>
							Open Menu
						</ColorLensIcon>
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
