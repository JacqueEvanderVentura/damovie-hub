import React from "react";

const FooterBackground = (): React.ReactElement => {
	const isXlScreen = window.innerWidth >= 1280;

	return (
		<svg
			className="w-full h-auto xl:absolute xl:top-[600px] z-0"
			viewBox={isXlScreen ? "0 -250 1728 853" : "0 0 1728 853"}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M833.881 37.7856C271.276 -45.9827 88.5883 29.955 -49.996 69.9885L-49.9999 853.001L1753 853L1753 69.9883C1631.21 106.686 1355.45 115.443 833.881 37.7856Z"
				fill="url(#paint0_linear_12_152)"
			/>
			<path
				d="M833.881 37.7856C271.276 -45.9827 88.5883 29.955 -49.996 69.9885L-49.9999 853.001L1753 853L1753 69.9883C1631.21 106.686 1355.45 115.443 833.881 37.7856Z"
				fill="url(#paint1_linear_12_152)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_12_152"
					x1="851.498"
					y1="-32.1802"
					x2="851.402"
					y2="703.714"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						offset="0.00520833"
						stopColor="white"
					/>
				</linearGradient>
				<linearGradient
					id="paint1_linear_12_152"
					x1="851.498"
					y1="-32.1802"
					x2="851.402"
					y2="703.714"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						offset="0.00520833"
						stopColor="#5141EA"
					/>
					<stop
						offset="0.510417"
						stopColor="#468DD8"
						stopOpacity="0.689005"
					/>
					<stop
						offset="1"
						stopColor="#3AE3C3"
						stopOpacity="0.53"
					/>
				</linearGradient>
			</defs>
		</svg>
	);
};

export default FooterBackground;
