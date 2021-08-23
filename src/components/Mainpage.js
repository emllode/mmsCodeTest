import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

	const Searchpage = async (e) => {
		setImages(null);
		setLoading(true);

		const { data } = await axios.get(
			`https://api.unsplash.com/search/photos/?client_id=${REACT_APP_ACCESS_KEY}&query=${e.target.value}
				`
		);
		console.log(data.results);
		setImages(data.results);

		setLoading(false);
	};

	let queryFilterOnChange = (e) => {
		console.log(e.target.value + 'this is target value');
		setQuery(e.target.value);
		setImages();

		Searchpage(e);
	};

	useEffect(() => {
		FirstPageLoad();
		setLoading(false);
	}, [query.length < 1]);

	const FirstPageLoad = async () => {
		setLoading(true);

		const fetchImages = async () => {
			const { data } = await axios(
				`https://api.unsplash.com/photos/?client_id=${REACT_APP_ACCESS_KEY}
				`
			);
			savedData(data);
			console.log(data);
		};
		fetchImages();
	};

	return (
		<div>
			<h2>Hello</h2>
			<Search
				setQuery={setQuery}
				query={query}
				Searchpage={Searchpage}
				queryFilterOnChange={queryFilterOnChange}
			/>
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
