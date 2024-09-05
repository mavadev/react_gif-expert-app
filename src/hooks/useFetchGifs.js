import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = (category) => {
	const [gifs, setGifs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const updateGifs = async () => {
		const newGifs = await getGifs(category);
		setGifs(newGifs);
		setIsLoading(false);
	};

	useEffect(() => {
		updateGifs();
	}, []);

	return {
		gifs,
		isLoading,
	};
};
