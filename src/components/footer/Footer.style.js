import styled from "styled-components";

export const FooterWrapper = styled.footer`
	padding: 3.43rem 0;

	.footer_inner {
		display: flex;
		justify-content: space-around;
		width: 100%;
		@media (max-width: 480px) {
			flex-direction: column;
			align-items: center;
		}
	}

	.hl {
		border-bottom: 1px solid rgba(80, 93, 104, 0.2);
		height: 0rem;
	}
`;
export const FooterLinks = styled.div`
	20% .logo {
		max-width: 15rem;
		img {
			filter: invert(50%);
		}
	}
	.footer-text {
        max-width: 470px;
        line-height:21px;
        font-size: 14px;
		color: #505d68;
		padding-right: 10rem;
		margin: 2rem 0 2rem 1.2rem;
	}
	.social-icons {
		margin-left: 1rem;
		img {
			max-width: 2rem;
			margin-right: 1rem;
		}
	}
	.vl {
		border-left: 1px solid #c2d1d9;
		height: 15rem;
	}
	.title {
		margin-bottom: 1rem;
		color: #505d68;
		font-size: 14px;
		line-height: 16.41px;
	}
	.text {
		margin: 0.5rem 0!important;
		color: #505d6880;
		font-size: 14px;
		line-height: 21px;
	}
	display: flex;
	width: 80%;
	justify-content: space-around;
	.link {
		margin: 0 10rem;
		display: flex;
		flex-direction: column;
		a {
			margin-bottom: 1rem;
		}
	}
	@media (max-width: 480px) {
		flex-direction: column;
		align-items: center;
		.footer-top {
			padding-bottom: 1.5rem;
			text-align: center;
		}
	}
`;

export const Logo = styled.div`
	width: 10rem;
`;
