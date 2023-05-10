import React from "react";
import logo from "../images/react-logo.png";

function Navbar() {
	return (
		<nav className="nav">
			<img src={logo} alt="react logo" className="nav-logo" />
			<h3 className="title">ReactFacts</h3>
			<h4 className="course">React Course - Project 1</h4>
		</nav>
	);
}

export default Navbar;
