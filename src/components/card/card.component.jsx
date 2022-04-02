import './card.css';

const Card = (props) => {
	console.log('Card Component Rendered');
	const { name, email } = props.user;
	let firstName = name.slice(0, name.indexOf(' '));
	let lastName = name.slice(name.indexOf(' ') + 1);
	return (
		<div className='card'>
			<img
				src={`https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=0D8ABC&color=fff`}
				alt='user-name-initials'
			/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};

export default Card;
