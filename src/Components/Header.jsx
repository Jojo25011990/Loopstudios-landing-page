import { useEffect, useState } from "react";
import Logo from "./Logo";
import MobileNavigation from "./MobileNavigation";
import NavLinks from "./NavLinks";
import NavToggleButtons from "./NavToggleButtons";

const Header = () => {
	const [isActive, setIstActive] = useState(false);

	const toggleButton = () => {
		setIstActive((changeButton) => !changeButton);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 710 && isActive) setIstActive(false);
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [isActive]);

	return (
		<header className="w-full flex justify-center py-16 px-5 relative">
			<div className="container-1110px mb-3.5">
				<nav className="flex justify-between items-center gap-10 relative z-40">
					<Logo />

					<NavLinks className={"nav-links-header-media-710px"} />
					<NavToggleButtons
						isActive={isActive}
						toggleButton={toggleButton}
					/>
				</nav>

				<h1 className="w-full max-w-2xl border-2 border-neutral-100  uppercase font-light text-7xl p-10 mt-44 header-h1-media-1070px header-h1-media-680px header-h1-media-400px">
					Immersive experiences that deliver
				</h1>
			</div>

			<MobileNavigation isActive={isActive} />
		</header>
	);
};

export default Header;
