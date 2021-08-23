import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Search';
import Toggle from './toggle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function Navbar(props) {
	const classes = useStyles();

	return (
		<div>
			<Toolbar>
				<Typography variant='h6' className={classes.title}>
					<Search
						setQuery={props.setQuery}
						query={props.query}
						Searchpage={props.Searchpage}
						queryFilterOnChange={props.queryFilterOnChange}
					/>
				</Typography>
				<FormControlLabel
					control={<Toggle />}
					label={
						<Box component='div' fontSize={12}>
							Toggle dark/light
						</Box>
					}
				/>
			</Toolbar>

			{/* <Search
				setQuery={props.setQuery}
				query={props.query}
				Searchpage={props.Searchpage}
				queryFilterOnChange={props.queryFilterOnChange}
			/>
			<FormControlLabel control={<Toggle />} label='Toggle dark/light' /> */}
		</div>
	);
}
