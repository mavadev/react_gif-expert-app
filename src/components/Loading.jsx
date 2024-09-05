import ReactLoading from 'react-loading';

export const Loading = () => {
	return (
		<div className="box-loading">
			<ReactLoading
				type="bars"
				color="black"
				width={125}
				height={125}
			/>
		</div>
	);
};
