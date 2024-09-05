import { GifItem, Loading } from '../components';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
	const { gifs, isLoading } = useFetchGifs(category);

	return isLoading ? (
		<Loading />
	) : (
		<div className="box-category">
			<h3>Resultados de "{category}"</h3>

			<div className="card-grid">
				{gifs.map((gif) => (
					<GifItem
						key={gif.id}
						{...gif}
					/>
				))}
			</div>
		</div>
	);
};
