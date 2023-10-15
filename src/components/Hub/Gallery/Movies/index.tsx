import MovieDetails from "./MovieDetails";
import MovieCard from "./MovieCard";
import { Fragment } from "react";

export interface IMovies {
	movies: Movie[];
}

export interface Movie {
	id: number;
	poster_path: string;
	title: string;
	release_date: string;
	genres: string[];
	overview: string;
	vote_average: number;
}

const Movies = ({ movies }: IMovies): JSX.Element => {
	return (
		<Fragment>
			{movies?.map((movie) => (
				<div
					key={movie?.id}
					className="relative flex justify-center w-full  cursor-pointer"
				>
					<MovieCard
						title={movie?.title}
						posterPath={movie?.poster_path}
					/>
					<MovieDetails
						title={movie?.title}
						year={movie?.release_date?.substring(0, 4)}
						genres={movie?.genres}
						description={movie?.overview}
						rating={movie?.vote_average}
					/>
				</div>
			))}
		</Fragment>
	);
};

export default Movies;
