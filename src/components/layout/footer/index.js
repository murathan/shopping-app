import { StyledFooter, StyledContent } from "./styled";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return <StyledFooter>©{currentYear} Altogic • Privacy Policy</StyledFooter>;
};

export default Footer;
