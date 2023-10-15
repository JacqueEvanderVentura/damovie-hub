import { ReactNode } from "react";
import classNames from "classnames";

interface IParagraphProps {
	children: ReactNode;
	className?: string;
}

const Paragraph = ({ children, className }: IParagraphProps): JSX.Element => {
	const paragraphClasses = classNames("text-base", className);

	return <p className={paragraphClasses}>{children}</p>;
};

export default Paragraph;
