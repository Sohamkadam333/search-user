import React, { Component, memo } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchField from './components/search-filed/search-field.component';

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
			searchField: '',
		};

		// this.handleUserUpdate = this.handleUserUpdate.bind(this);
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ users }))
			.catch((err) => console.log('Error getting users'));
	}

	// handleUserUpdate(e) {
	// 	this.setState({ searchField: e.target.value });
	// }

	handleUserUpdate = (e) => {
		return this.setState({ searchField: e.target.value });
	};

	render() {
		console.log('App Component Rendered');
		const { users, searchField } = this.state;
		const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchField.toLowerCase()));
		return (
			<div className='App'>
				<h1>Search User Demo</h1>
				<SearchField
					// handleUserUpdate={(e) => this.setState({ searchField: e.target.value })}
					handleUserUpdate={this.handleUserUpdate}
					placeHolder={'Search user'}
				/>
				<CardList users={filteredUsers} />
			</div>
		);
	}
}

export default memo(App);
