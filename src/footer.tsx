import React from "react";
import "./footer.css";

interface Props {
	github: string;
	name: string;
}

const Footer = (props: Props) => {
	return (
		<footer className="footer">
			<p className="footer-p">
				<a
					href={props.github}
					className="footer-a"
					target="_blank"
					rel="noreferrer noopener"
				>
					<span className="footer-span">Developed by</span>
					&nbsp;{props.name}&nbsp;
					<img
						className="github"
						src="https://i.imgur.com/4TlWcym.png"
						alt="github icon"
					/>
				</a>
				<span className="footer-span right">All Rights Reserved &reg;</span>
			</p>
		</footer>
	);
};

export default Footer;
