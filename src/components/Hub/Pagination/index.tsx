import React from "react";
import previousIcon from "../../../assets/svg/gallery/pagination/left.svg";
import nextIcon from "../../../assets/svg/gallery/pagination/right.svg";
import Paragraph from "../../Paragraph";
import classNames from "classnames";
interface PaginationProps {
	currentPage: number;
	handlePrevPage: () => void;
	handleNextPage: () => void;
	totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	handlePrevPage,
	handleNextPage,
}) => {
	const pageButtonClassName = classNames(
		"flex justify-center items-center bg-[#5141EA] rounded-full w-10 h-10 p-0 text-white"
	);
	const previousPageButtonClassName = classNames(pageButtonClassName, {
		"opacity-50 cursor-not-allowed": currentPage === 1,
	});
	const nextPageButtonClassName = classNames(pageButtonClassName, {
		"opacity-50 cursor-not-allowed": currentPage === totalPages,
	});
	return (
		<div className="mt-6 flex justify-center items-center space-x-3">
			<button
				className={previousPageButtonClassName}
				onClick={handlePrevPage}
				disabled={currentPage === 1}
			>
				<img
					src={previousIcon}
					className="mr-0.5"
				/>
			</button>
			<Paragraph>
				{currentPage}/{totalPages}
			</Paragraph>
			<button
				className={nextPageButtonClassName}
				onClick={handleNextPage}
			>
				<img
					src={nextIcon}
					className="ml-0.5"
				/>
			</button>
		</div>
	);
};

export default Pagination;
