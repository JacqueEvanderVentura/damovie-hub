import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchLatestSuccess,
} from "../../../logic/movies/actions";
import { RootState } from "../../../logic/store";
import { fetchLatestMovie } from "../../../logic/movies/latest";
const Latest: React.FC = () => {
	const dispatch = useDispatch();
	const latestMovie = useSelector((state: RootState) => state.movie.latest);

	useEffect(() => {
		dispatch(fetchLatestMovie())
			.then((response: any) => {
				dispatch(fetchLatestSuccess(response));
				console.info("here");
			})
			.catch((error: any) => {
				console.error(error);
			});
	}, [dispatch]);

	return (
		<div>
			{/* Render the latest movie data */}
			{latestMovie && (
				<div>
					<h2>{latestMovie.title}</h2>
					<p>{latestMovie.overview}</p>
				</div>
			)}
		</div>
	);
};

export default Latest;
