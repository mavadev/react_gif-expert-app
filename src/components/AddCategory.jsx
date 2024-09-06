import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onAddCategory }) => {
	const [search, setSearch] = useState('');

	const onInputChange = ({ target }) => {
		setSearch(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (search.trim() == '') return;

		onAddCategory(search.trim());
		setSearch('');
	};

	return (
		<form
			onSubmit={onSubmit}
			aria-label="form"
		>
			<input
				type="text"
				value={search}
				onChange={onInputChange}
				placeholder="Ej: Dragon Ball"
			/>
			<button>BUSCAR</button>
		</form>
	);
};

AddCategory.propTypes = {
	onAddCategory: PropTypes.func.isRequired,
};
