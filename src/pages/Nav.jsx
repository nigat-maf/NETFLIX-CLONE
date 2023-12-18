import React, { useEffect, useState } from "react";
import "../assets/Nav.css";

function Nav() {
	const [show, setshow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setshow(true);
			} else {
				setshow(false);
			}
		});
		return () => {
			window.removeEventListener("scroll", () => {});
		};
	}, []);
	return (
		<div className={`nav ${show && "nav__black"}`}>
			<img
				className="nav__logo"
				src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
				alt="Netflix Logo"
			/>
			<img
				className="nav__avatar"
				src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
				alt="Avatar Logo"
			/>
		</div>
	);
}

export default Nav;
