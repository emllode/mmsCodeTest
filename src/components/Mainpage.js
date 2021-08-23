import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Mainpage = (props) => {
	const [images, setImages] = useState({
		date: '',
		type: '',
		text: '',
	});
	const API_KEY = process.env.REACT_APP_ACCESS_KEY;

	let savedData = (data) => {
		setImages({
			logs: data.data,
			totPages: data.totalPages,
			currPage: data.pageNumber,
		});
	};

	useEffect(() => {
		FirstPageLoad();
	}, []);

	const FirstPageLoad = async () => {
		const fetchImages = async () => {
			const { data } = await axios(
				`https://api.unsplash.com/photos/?client_id=${API_KEY}
				`
			);
			// savedData(data);
			console.log(data);
		};
		fetchImages();
	};

	return (
		<div>
			<h2>Hello</h2>
		</div>
	);
};

export default Mainpage;
