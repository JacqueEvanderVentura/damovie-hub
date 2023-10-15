import React, { Fragment } from "react";
import Heading from "../../../Heading";

interface IMovieCard {
	posterPath: string;
	title: string;
}

const MovieCard: React.FC<IMovieCard> = ({ posterPath, title }: IMovieCard) => {
	return (
		<Fragment>
			{posterPath === null ? (
				<div className="h-72 w-48 bg-gray-600 rounded-[50px] shadow-md flex items-center text-center">
					<Heading className="italic">Image not ready...</Heading>
				</div>
			) : (
				<img
					src={`https://image.tmdb.org/t/p/w500${posterPath}`}
					alt={title}
					className="h-72 w-full rounded-[50px] shadow-md object-cover"
				/>
			)}
		</Fragment>
	);
};

export default MovieCard;
