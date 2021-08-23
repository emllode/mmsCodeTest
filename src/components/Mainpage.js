import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Box from '@material-ui/core/Box';
import Search from './Search';
import './sass/MainPageSass.scss';

const Mainpage = (props) => {
	const [images, setImages] = useState();
	const [loading, setLoading] = useState(false);
	const [query, setQuery] = useState('');
	const { REACT_APP_ACCESS_KEY } = process.env;

	let savedData = (data) => {
		setImages(data);
	};

	const useStyles = makeStyles((theme) => ({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
			overflow: 'hidden',
			backgroundColor: theme.palette.background.paper,
		},
	}));

	useEffect(() => {
		FirstPageLoad();
	}, []);

	const FirstPageLoad = async () => {
		setLoading(true);
		const fetchImages = async () => {
			const { data } = await axios(
				`https://api.unsplash.com/photos/?client_id=${REACT_APP_ACCESS_KEY}
				`
			);
			savedData(data);
		};
		fetchImages();
		setLoading(false);
	};

	const classes = useStyles();
	console.log(images);

	return (
		<div>
			<h2>Hello</h2>
			<Search setImages={setImages} />
			<Box className={'wholeImageList'}>
				<ImageList cols={3} gap={7}>
					{images &&
						images.map((item) => (
							<ImageListItem key={item.id}>
								<img
									src={item.urls.small}
									alt={item.alt_description}
									width={images.width}
									height={images.height}
								/>
							</ImageListItem>
						))}
				</ImageList>
			</Box>
		</div>
	);
};

export default Mainpage;
