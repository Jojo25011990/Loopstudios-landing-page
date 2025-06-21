import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Footer = () => {
	return (
		<footer className="w-full flex justify-center bg-neutral-900 px-5 py-10">
			<div className="container-1110px grid grid-cols-2 row-auto gap-y-5 footer-media-710px">
				<Logo />

				<nav className="nav-order-1-media-710px">
					<ul className="flex items-center justify-end gap-5 ">
						<li>
							<a
								href=""
								className="hover:opacity-50 duration-300 transition-opacity"
							>
								<img src="./images/icon-facebook.svg" alt="" />
							</a>
						</li>
						<li>
							<a
								href=""
								className="hover:opacity-50 duration-300 transition-opacity"
							>
								<img src="./images/icon-twitter.svg" alt="" />
							</a>
						</li>
						<li>
							<a
								href=""
								className="hover:opacity-50 duration-300 transition-opacity"
							>
								<img src="./images/icon-pinterest.svg" alt="" />
							</a>
						</li>
						<li>
							<a
								href=""
								className="hover:opacity-50 duration-300 transition-opacity"
							>
								<img src="./images/icon-instagram.svg" alt="" />
							</a>
						</li>
					</ul>
				</nav>

				<nav className="w-full flex justify-start nav-order-2-media-710px">
					<NavLinks className={"nav-links nav-links-media-500px"} />
				</nav>

				<p className="opacity-50 text-right nav-order-3-media-710px">
					&copy; 2021 Loopstudios. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
