import React from "react";
import Paragraph from "../../../Paragraph";
import Heading from "../../../Heading";

interface MovieDetailsProps {
	title: string;
	year: string;
	genres: string[];
	description: string;
	rating: number;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({
	title,
	year,
	genres,
	description,
	rating,
}) => {
	const mapRating = (
		rating: number,
		minOriginal = 0,
		maxOriginal = 8,
		minNew = 0,
		maxNew = 5
	): number => {
		const mappedValue =
			((rating - minOriginal) / (maxOriginal - minOriginal)) *
				(maxNew - minNew) +
			minNew;
		return Math.floor(mappedValue * 2) / 2; 
	};
	const stars = mapRating(rating);
	const fullStars = Math.floor(stars);
	const halfStars = stars - fullStars;

	return (
		<div className="absolute top-0 left-0 rounded-[50px] w-full h-72 overflow-hidden text-ellipsis bg-[#5141eacc] px-6 py-16 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
			<Heading
				level={6}
				className="font-bold text-sm"
			>
				{title}
			</Heading>
			<Paragraph className="text-xs">
				{year} &bull; {genres?.join("/")}
			</Paragraph>
			<Paragraph className="line-clamp-5 text-xs">{description}</Paragraph>
			<div className="flex justify-center mt-10">
				{[...Array(5)].map((_, index) => (
					<svg
						key={index}
						className="h-5 w-5 text-yellow-500"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						{index < fullStars ? (
							<path
								clipRule="evenodd"
								d="M10 1l2.928 6.472 6.472.928-4.714 4.586 1.114 6.472L10 15.337l-5.8 3.119 1.114-6.472L.6 8.4l6.472-.928L10 1z"
								fillRule="evenodd"
							/>
						) : index < fullStars + halfStars ? (
							<>
								<path
									d="M10 1l2.928 6.472 6.472.928-4.714 4.586 1.114 6.472L10 15.337l-5.8 3.119 1.114-6.472L.6 8.4l6.472-.928L10 1z"
									fillRule="evenodd"
									clipPath="url(#half)"
								/>
								<clipPath id="half">
									<rect
										x="0"
										y="0"
										width="10"
										height="20"
									/>
								</clipPath>
							</>
						) : (
							<path
								fill="none"
								stroke="currentColor"
								d="M10 1l2.928 6.472 6.472.928-4.714 4.586 1.114 6.472L10 15.337l-5.8 3.119 1.114-6.472L.6 8.4l6.472-.928L10 1z"
							/>
						)}
					</svg>
				))}
			</div>
		</div>
	);
};

export default MovieDetails;
