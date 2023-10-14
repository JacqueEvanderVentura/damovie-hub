import { ReactNode } from "react";
import classNames from "classnames";

interface IHeadingProps {
	children: ReactNode;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	className?: string;
}

const Heading = ({
	level = 2,
	children,
	className,
}: IHeadingProps): JSX.Element => {
	const sizes = [
		"text-5xl lg:text-6xl",
		"text-4xl lg:text-5xl",
		"text-3xl lg:text-4xl",
		"text-2xl lg:text-3xl",
		"text-xl	lg:text-2xl",
		"text-lg	lg:text-xl",
	];

	if (level >= 1 && level <= 6) {
		const headingClasses = classNames(
			{ "font-bold": level < 4 },
			"mb-4",
			className
		);
		const sizeClass = sizes[level - 1];

		const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

		return (
			<HeadingTag className={classNames(headingClasses, sizeClass)}>
				{children}
			</HeadingTag>
		);
	} else {
		return <span>Invalid heading level</span>;
	}
};

export default Heading;
