import { useState, useEffect } from "react";

const GalleryCard = ({
	description = "heading",
	imageDesktop,
	imageMobile,
}) => {
	const [bgImage, setBgImage] = useState(imageDesktop);

	useEffect(() => {
		const changeImage = () => {
			const width = window.innerWidth;

			if (width > 1000) {
				setBgImage(imageDesktop);
			} else {
				setBgImage(imageMobile);
			}
		};

		changeImage();

		window.addEventListener("resize", changeImage);

		return () => window.removeEventListener("resize", changeImage);
	}, [imageDesktop, imageMobile]);

	return (
		<div
			className="w-3x gallery-card flex items-end p-6 text-white gallery-card-media-1000px"
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<h3 className="text-xl uppercase font-light relative z-20 ">
				{description}
			</h3>
		</div>
	);
};

export default GalleryCard;
