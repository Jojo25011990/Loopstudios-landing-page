import { useEffect, useRef } from "react";
import gsap from "gsap";

const NavLinks = ({ className = "", isActive }) => {
	const container = useRef();

	const links = [
		{
			id: 0,
			linkName: "About",
		},
		{
			id: 1,
			linkName: "Careers",
		},
		{
			id: 2,
			linkName: "Events",
		},
		{
			id: 3,
			linkName: "Products",
		},
		{
			id: 4,
			linkName: "Support",
		},
	];

	useEffect(() => {
		const ctx = gsap.context(() => {
			if (isActive) {
				gsap.from(".nav-link", {
					autoAlpha: 0,
					duration: 0.6,
					stagger: 0.1,
				});
			}
		}, container);

		return () => ctx.revert();
	}, [isActive]);

	return (
		<ul
			ref={container}
			className={`w-full max-w-96 flex justify-between ${className}`}
		>
			{links.map((link) => (
				<li key={link.id}>
					<a href="#" className="relative nav-link">
						{link.linkName}
					</a>
				</li>
			))}
		</ul>
	);
};

export default NavLinks;
