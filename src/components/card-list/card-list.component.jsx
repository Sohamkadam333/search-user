import React from 'react';
import Card from '../card/card.component';
import './card-list.css';

const CardList = (props) => {
	console.log('CardList Component Rendered');
	return (
		<div className='card-list'>
			{props.users.map((item) => (
				<Card key={item.id} user={item} />
			))}
		</div>
	);
};

export default CardList;
