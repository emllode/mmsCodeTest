import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import Badge from '@material-ui/core/Badge';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import './sass/SearchSass.scss';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	shape: {
		// backgroundColor: theme.palette.primary.main,
		width: 40,
		height: 40,
	},
	shapeCircle: {
		borderRadius: '50%',
		color: 'blue !important',
	},
}));

export default function Search(props) {
	const classes = useStyles();
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
	const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />;

	console.log(anchorEl);

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
				<ColorLensIcon
					aria-controls='simple-menu'
					aria-haspopup='true'
					onClick={handleClick}
				>
					Open Menu
				</ColorLensIcon>
				<Menu
					id='simple-menu'
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
	);
}
