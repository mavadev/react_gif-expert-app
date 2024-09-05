const API_KEY = import.meta.env.VITE_GIF_API_KEY;

export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=20`;
	const response = await fetch(url);
	const { data = [] } = await response.json();

	const newGifs = data.map((newGif) => ({
		id: newGif.id,
		title: newGif.title,
		url: newGif.url,
		image: newGif.images.fixed_width.url,
		width: newGif.images.fixed_width.width,
		height: newGif.images.fixed_width.height,
	}));

	return newGifs;
};
