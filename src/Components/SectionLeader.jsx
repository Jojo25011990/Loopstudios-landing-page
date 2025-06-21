import HeadingSecondary from "./HeadingSecondary";

const SectionLeader = () => {
	return (
		<section className="container-1110px relative section-leader-media-1070px section-leader-media-610px">
			<div className="relative z-10">
				<img src="./images/desktop/image-interactive.jpg" alt="Man" />
			</div>

			<div className=" bg-white absolute right-0 bottom-0 z-20 content-box">
				<HeadingSecondary
					description={"the leader in interactive vr"}
				/>
				<p className="text-sm text-neutral-500 ">
					Founded in 2011, Loopstudios has been producing world-class
					virtual reality projects for some of the best companies
					around the globe. Our award-winning creations have
					transformed businesses throught digital experiences that
					bind to their brand.
				</p>
			</div>
		</section>
	);
};

export default SectionLeader;
