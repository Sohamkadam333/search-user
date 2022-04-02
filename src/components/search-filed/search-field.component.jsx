import './search.css';
const SearchField = (props) => {
	console.log('SearchField Component Rendered');
	const { handleUserUpdate, placeHolder } = props;

	return <input className='search' type='search' placeholder={placeHolder} onChange={handleUserUpdate} />;
};

export default SearchField;
