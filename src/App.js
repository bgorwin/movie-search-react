import React from 'react';
import SearchMovies from './searchMovies';
import './App.css';

function App() {
	return (
		<div className='container'>
			<h1 className='title'>React Movie Search</h1>
			<SearchMovies />
			<h3>Search for a movie</h3>
		</div>
	);
}

export default App;
