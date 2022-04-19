import React from "react";
import { FooterLinks, FooterWrapper, Logo } from "./Footer.style";
import logo from "../../images/LOGO-01.png";
import iconFb from "../../images/icon-facebook.svg";
import iconTwitter from "../../images/icon-twitter.svg";
import iconInstagram from "../../images/icon-instagram.svg";
import { Container } from "../../styles/Common.style";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<FooterWrapper>
				<Container>
					<div className="footer_inner">
						<FooterLinks>
							<div className="footer-top">
								<Logo>
									<img src={logo} alt="logo" />
								</Logo>
								<p className="footer-text">
									We are Europe's first premium long-distance
									coach provider. We have made it our mission
									to offer 'first-class travel at economy
									prices'
								</p>
								<div className="social-icons">
									<img src={iconTwitter} alt="" />
									<img src={iconFb} alt="" />
									<img src={iconInstagram} alt="" />
								</div>
							</div>
							<div className="vl"></div>
							<div className="link">
								<p className="title">LINKS</p>
								<Link to="/about" className="text">
									Home
								</Link>
								<Link to="/Contact" className="text">
									About us
								</Link>{" "}
								<Link to="/blog" className="text">
									Features
								</Link>
								<Link to="/blog" className="text">
									Newsroom
								</Link>
							</div>
							<div className="vl"></div>
							<div className="link">
								<p className="title">CONTACT</p>
								<p className="text">info@form.com</p>
								<p className="text">882-587-3025</p>{" "}
								<p className="text">
									6116 Willa River Suite 610
								</p>
							</div>
						</FooterLinks>
					</div>
					<div className="hl"></div>
				</Container>
			</FooterWrapper>
		</div>
	);
};

export default Footer;
