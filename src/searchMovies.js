import React, { useState } from 'react';
import MovieCard from './movieCard';

export default function SearchMovies() {
	// states - input query, movies
	const [query, setQuery] = useState('');

	//create the state for movies, and update that state appropriate
	const [movies, setMovies] = useState([]);

	const searchMovies = async (e) => {
		e.preventDefault();

		const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			setMovies(data.results);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<form className='form' onSubmit={searchMovies}>
				<label htmlFor='query' className='label'>
					Movie Name
				</label>
				<input
					className='input'
					name='query'
					placeholder='i.e. Broad City'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				></input>
				<button className='button' type='submit'>
					Search
				</button>
			</form>
			<div className='card-list'>
				{movies
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						<MovieCard movie={movie} key={movie.id} />
					))}
			</div>
		</>
	);
}
