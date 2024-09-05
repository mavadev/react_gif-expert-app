export const GifItem = ({ title, image, url, width, height }) => {
	return (
		<div className="card">
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
