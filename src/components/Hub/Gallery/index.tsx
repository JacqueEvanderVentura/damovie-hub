import React, { ReactNode } from "react";

interface GalleryProps {
	children: ReactNode;
}

const Gallery: React.FC<GalleryProps> = ({
	children,
}: GalleryProps) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center w-full p-0 gap-x-9 gap-y-10 md:gap-y-12">
			{children}
		</div>
	);
};

export default Gallery;
