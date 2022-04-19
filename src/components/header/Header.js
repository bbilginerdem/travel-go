import React, { useState } from "react";
import { Navigation, Nav, Ul, Li, Logo, HeaderWrapper } from "./Header.style";
import logo from "../../images/LOGO-01.png";
import { Link } from "react-router-dom";
import { Button, Container } from "../../styles/Common.style";
import hamburger from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";
const Header = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<div>
			<HeaderWrapper>
				<Container>
					<Navigation>
						<Nav>
							<Logo>
								<img src={logo} alt="logo" />
							</Logo>
							<Ul className={open ? `active` : `navlinks`}>
								<Li>
									<Link to={`#`}>HOME</Link>
								</Li>
								<Li>
									<Link to={`#`}>ABOUT US</Link>
								</Li>
								<Li>
									<Link to={`#`}>FEATURES</Link>
								</Li>
								<Li>
									<Link to={`#`}>NEWSROOM</Link>
								</Li>
								<Li>
									<Link to={`#`}>CONTACT</Link>
								</Li>
							</Ul>
							<Button>BOOK NOW</Button>
							<img
								src={open ? close : hamburger}
								className="hamburger"
								alt=""
								onClick={handleClick}
							/>
						</Nav>
					</Navigation>
				</Container>
			</HeaderWrapper>
		</div>
	);
};

export default Header;
