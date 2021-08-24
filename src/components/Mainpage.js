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
	const [color, setColor] = useState('');
	const { REACT_APP_ACCESS_KEY } = process.env;

	console.log(loading + 'is it loading?');
	/*Func that does all fetches */
	const Searchpage = async (e) => {
		if (query === '' && color === '') {
			const fetchImages = async () => {
				const { data } = await axios(
					`https://api.unsplash.com/photos/?client_id=${REACT_APP_ACCESS_KEY}
					`
				);
				setImages(data);
				setLoading(true);
			};
			fetchImages();
		} else {
			const fetchQuery = async () => {
				const { data } = await axios(
					`https://api.unsplash.com/search/photos/?client_id=${REACT_APP_ACCESS_KEY}&query=${e.target.value}
					`
				);

				if (data.results.length < 1) {
					const { data } = await axios(
						`https://api.unsplash.com/photos/?client_id=${REACT_APP_ACCESS_KEY}
						`
					);
					setImages(data);
					setLoading(true);
				} else {
					setImages(data.results);
					setLoading(true);
				}
			};
			fetchQuery();
		}
	};

	const fetchcolor = async (e) => {
		if (query.length > 1) {
			const { data } = await axios(
				`https://api.unsplash.com/search/photos/?client_id=${REACT_APP_ACCESS_KEY}&query=${query}&color=${e}`
			);
			setImages(data.results);
		} else {
			const { data } = await axios(
				`https://api.unsplash.com/search/photos/?client_id=${REACT_APP_ACCESS_KEY}&color=${e}`
			);
			setImages(data.results);
		}
	};

	/*get query from input*/
	let queryFilterOnChange = (e) => {
		console.log(e.target.value + 'this is target value');
		setQuery(e.target.value);
		setImages('');
		Searchpage(e);
		setLoading(!true);
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
				setColor={setColor}
				fetchcolor={fetchcolor}
			/>

			{loading ? (
				<Box className={'wholeImageList'}>
					<ImageList cols={3} gap={10}>
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
