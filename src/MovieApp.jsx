import { useState, useEffect } from "react";
import { message } from "antd";
import MovieCard from "./components/MovieCard";
import SearchIconSvg from "./assets/search.svg";
import { searchMovies } from "./ApiActions/searchMovies";

const MovieApp = () => {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = async (title) => {
		if (!title.trim()) {
			message.warning("Please enter a movie name.");
			return;
		}
		const results = await searchMovies(title);
		setMovies(results);
	};

	useEffect(() => {
		handleSearch("Fast");
	}, []);

	return (
		<div className="app">
			<h1>Movie World</h1>

			<div className="search">
				<input
					placeholder="Search for movies"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<img
					className="search_barIcon"
					src={SearchIconSvg}
					alt="search"
					onClick={() => handleSearch(searchTerm)}
				/>
			</div>

			{movies.length > 0 ? (
				<div className="container">
					{movies.map((movie) => (
						<MovieCard key={movie.imdbID} movie={movie} />
					))}
				</div>
			) : (
				<div className="empty">
					<h2>No movies found for "{searchTerm}"</h2>
				</div>
			)}
		</div>
	);
};

export default MovieApp;
