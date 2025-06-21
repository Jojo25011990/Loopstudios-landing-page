import GalleryCard from "./GalleryCard";
import HeadingSecondary from "./HeadingSecondary";

const SectionGallery = () => {
	return (
		<section className="container-1110px relative gallery-section-media-1000px">
			<div className="w-full flex justify-between gap-10 gallery-wrapper-media-1000px section-gallery-media-610px">
				<HeadingSecondary description={"our creations"} />
				<button
					type="button"
					className="relative z-10 w-40 h-10 text-neutral-900 border border-neutral-900 uppercase tracking-wide leading-10 text-sm cursor-pointer overflow-hidden duration-300 transition-colors"
				>
					see all
				</button>
			</div>

			<div className="w-full grid grid-cols-4 row-auto gap-8 gallery-cards-media-1000px">
				<GalleryCard
					description="Deep Earth"
					imageDesktop="./images/desktop/image-deep-earth.jpg"
					imageMobile="./images/mobile/image-deep-earth.jpg"
				/>
				<GalleryCard
					description="Night Arcade"
					imageDesktop="./images/desktop/image-night-arcade.jpg"
					imageMobile="./images/mobile/image-night-arcade.jpg"
				/>
				<GalleryCard
					description="Soccer Team VR"
					imageDesktop="./images/desktop/image-soccer-team.jpg"
					imageMobile="./images/mobile/image-soccer-team.jpg"
				/>
				<GalleryCard
					description="The Grid"
					imageDesktop="./images/desktop/image-grid.jpg"
					imageMobile="./images/mobile/image-grid.jpg"
				/>
				<GalleryCard
					description="From Up Above VR"
					imageDesktop="./images/desktop/image-from-above.jpg"
					imageMobile="./images/mobile/image-from-above.jpg"
				/>
				<GalleryCard
					description="Pocket Borealis"
					imageDesktop="./images/desktop/image-pocket-borealis.jpg"
					imageMobile="./images/mobile/image-pocket-borealis.jpg"
				/>
				<GalleryCard
					description="The Curiosity"
					imageDesktop="./images/desktop/image-curiosity.jpg"
					imageMobile="./images/mobile/image-curiosity.jpg"
				/>
				<GalleryCard
					description="Make It Fisheye"
					imageDesktop="./images/desktop/image-fisheye.jpg"
					imageMobile="./images/mobile/image-fisheye.jpg"
				/>
			</div>
		</section>
	);
};

export default SectionGallery;
