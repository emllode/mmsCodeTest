import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Box from '@material-ui/core/Box';
import './sass/MainPageSass.scss';
import Skeleton from '@material-ui/lab/Skeleton';
import _ from 'lodash';
import Navbar from './Navbar';

const Mainpage = (props) => {
	const [images, setImages] = useState();
	const [loading, setLoading] = useState(false);
	const [query, setQuery] = useState('');
	const { REACT_APP_ACCESS_KEY } = process.env;

	/*Func that does all fetches */
	const Searchpage = async (e) => {
		setImages(null);

		if (!e) {
			const fetchImages = async () => {
				const { data } = await axios(
					`https://api.unsplash.com/photos/?client_id=${REACT_APP_ACCESS_KEY}
					`
				);
				setImages(data);
				console.log(data);
			};
			fetchImages();
			setLoading(false);
		} else {
			const { data } = await axios.get(
				`https://api.unsplash.com/search/photos/?client_id=${REACT_APP_ACCESS_KEY}&query=${e.target.value}
				`
			);
			console.log(data.results);
			setImages(data.results);
			setLoading(!loading);
		}
	};

	/*get query from input*/
	let queryFilterOnChange = (e) => {
		console.log(e.target.value + 'this is target value');
		setQuery(e.target.value);
		setImages();
		setLoading(true);

		Searchpage(e);
	};

	useEffect(() => {
		Searchpage();
	}, []);

	/*Lodash for creating n amount of Skeleton*/
	let skeletonCards = [];
	_.times(8, (i) => {
		skeletonCards.push(
			<ImageListItem>
				<Skeleton variant='rect' width={500} height={450} />
			</ImageListItem>
		);
	});
	return (
		<div>
			<Navbar
				setQuery={setQuery}
				query={query}
				Searchpage={Searchpage}
				queryFilterOnChange={queryFilterOnChange}
			/>

			{!loading ? (
				<Box className={'wholeImageList'}>
					<ImageList cols={3} gap={7}>
						{images &&
							images.map((item) => (
								<ImageListItem key={item.id}>
									<img src={item.urls.small} alt={item.alt_description} />
								</ImageListItem>
							))}
					</ImageList>
				</Box>
			) : (
				<Box className={'wholeImageList'}>
					<ImageList cols={3} gap={7}>
						{skeletonCards}
					</ImageList>
				</Box>
			)}
		</div>
	);
};

export default Mainpage;
