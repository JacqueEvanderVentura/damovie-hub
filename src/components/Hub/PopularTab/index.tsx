import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../logic/store"; // Adjust the import path accordingly
import { fetchPopularMovies } from "../../../logic/movies/popular/popularSlice"; // Adjust the import path accordingly

const PopularTab: React.FC = () => {
	const dispatch = useDispatch();
	const { movies, status, error } = useSelector(
		(state: RootState) => state.popular
	);

	useEffect(() => {
		if (status === "idle") {
			dispatch<any>(fetchPopularMovies());
		}
	}, [status, dispatch]);

	return (
		<div className="p-4">
			{status === "loading" && (
				<div className="text-center">
					<div
						className="spinner-border text-primary"
						role="status"
					>
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			)}

			{status === "succeeded" && (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{movies?.map((movie) => (
						<div
							key={movie.id}
							className="border p-4 rounded shadow-md"
						>
							<img
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt={movie.title}
								className="w-full h-auto mb-4 rounded"
							/>
							<h3 className="text-xl font-bold mb-2">{movie.title}</h3>
							<p>{movie.overview}</p>
						</div>
					))}
				</div>
			)}

			{status === "failed" && (
				<div className="text-center text-red-500 font-bold">
					<p>Error fetching popular movies: {error}</p>
				</div>
			)}
		</div>
	);
};

export default PopularTab;
