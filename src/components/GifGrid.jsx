import PropTypes from 'prop-types';
import { GifItem, Loading } from '../components';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
	const { gifs, isLoading } = useFetchGifs(category);

	return isLoading ? (
		<Loading />
	) : (
		<div
			className="box-category"
			data-testid="test_box-category"
		>
			<h3 data-testid="test_search-title">Resultados de "{category}"</h3>

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

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};
