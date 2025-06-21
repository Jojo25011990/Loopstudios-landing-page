import SectionGallery from "./SectionGallery";
import SectionLeader from "./SectionLeader";

const Main = () => {
	return (
		<main className="w-full flex flex-col gap-36  justify-center items-center px-5 py-30 bg-white">
			<SectionLeader />
			<SectionGallery />
		</main>
	);
};

export default Main;
