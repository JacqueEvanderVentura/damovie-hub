import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../logic/store";
import { fetchPopularMovies } from "../../../logic/movies/popular/popularSlice";

import Heading from "../../Heading";
import Paragraph from "../../Paragraph";
import Movies from "../Gallery/Movies";
import Gallery from "../Gallery";
import Pagination from "../Pagination";

const PopularTab: React.FC = () => {
	const dispatch = useDispatch();
	const { currentMovies, status, error, totalPages } = useSelector(
		(state: RootState) => state.popular
	);

	const [currentPage, setCurrentPage] = React.useState(1);

	useEffect(() => {
		if (currentPage >= 1) {
			dispatch<any>(fetchPopularMovies(currentPage));
		}
	}, [currentPage]);

	const handleNextPage = (): void => {
		if (currentPage < totalPages) {
			setCurrentPage((prevPage) =>
				prevPage === totalPages ? prevPage : prevPage + 1
			);
		}
	};

	const handlePrevPage = (): void => {
		setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
	};

	return (
		<div className="lg:py-4">
			<div className="my-10 md:my-14 xl:my-24">
				<Heading>Popular</Heading>
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

			<>
				<Gallery>
					<Movies movies={currentMovies} />
					{status === "loading" && (
						<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-white">
							<div
								className="spinner-border text-primary"
								role="status"
							>
								<span className="sr-only">Loading...</span>
							</div>
						</div>
					)}
				</Gallery>
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					handlePrevPage={handlePrevPage}
					handleNextPage={handleNextPage}
				/>
			</>

			{status === "failed" && (
				<>
					<div className="text-center text-red-500 font-bold">
						<p>Error fetching popular movies: {error}</p>
					</div>
				</>
			)}
		</div>
	);
};

export default PopularTab;
