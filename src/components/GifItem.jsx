import PropTypes from 'prop-types';

export const GifItem = ({ title, image, url, width, height }) => {
	return (
		<div
			className="card"
			data-testid="test_gif"
		>
			<a
				href={url}
				target="_blank"
				className="card-link"
				rel="noopener noreferrer"
			>
				<img
					src={image}
					alt={title}
					width={width}
					height={height}
				/>
				<div className="box-information">
					<p>{title}</p>
				</div>
			</a>
		</div>
	);
};

GifItem.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	width: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
};
