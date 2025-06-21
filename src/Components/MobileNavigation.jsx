import NavLinks from "./NavLinks";

const MobileNavigation = ({ isActive }) => {
	return (
		<nav
			className={`absolute top-0 left-0 w-full h-full bg-neutral-900 px-5 justify-center items-center ${
				isActive ? "flex" : "hidden"
			}`}
		>
			<NavLinks
				isActive={isActive}
				className="flex-col items-center gap-4 mt-10"
			/>
		</nav>
	);
};

export default MobileNavigation;
