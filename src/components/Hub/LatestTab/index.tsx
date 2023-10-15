import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../logic/store";
import { fetchLatestMovie } from "../../../logic/movies/latest/latestSlice";
import Heading from "../../Heading";
import Paragraph from "../../Paragraph";
import Movies from "../Gallery/Movies";
import Gallery from "../Gallery";

const LatestTab: React.FC = () => {
	const dispatch = useDispatch();
	const { movies, status, error } = useSelector(
		(state: RootState) => state.latest
	);

	useEffect(() => {
		dispatch<any>(fetchLatestMovie());
	}, []);

	return (
		<div className="lg:py-4">
			<div className="my-10 md:my-14 xl:my-24">
				<Heading>Latest</Heading>
				<Paragraph>Texto introductorio</Paragraph>
			</div>
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
				<>
					<Gallery>
						<Movies movies={movies} />
					</Gallery>
				</>
			)}

			{status === "failed" && (
				<>
					<div className="text-center text-red-500 font-bold">
						<p>Error fetching the latest movie: {error}</p>
					</div>
				</>
			)}
		</div>
	);
};

export default LatestTab;
