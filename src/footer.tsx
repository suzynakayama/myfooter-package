import * as React from "react";
import "./footer.css";

const Footer = (github: string, name: string) => {
	return (
		<footer className="footer">
			<p className="footer-p">
				<a
					href={github}
					className="footer-a"
					target="_blank"
					rel="noreferrer noopener"
				>
					<span className="footer-span">Developed by</span>
					&nbsp;{name}&nbsp;
					<img className="github" src="./assets/github.png" alt="github icon" />
				</a>
				<span className="footer-span left">All Rights Reserved &reg;</span>
			</p>
		</footer>
	);
};

export default Footer;
