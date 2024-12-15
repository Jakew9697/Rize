import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faBullhorn,
	faArrowTrendUp,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./BottomNav.css";

export default function BottomNav() {
	const icons = [faHouse, faBullhorn, faArrowTrendUp, faUser];
	const links = ["/", "/discussions", "/trends", "/profile"];
	const location = useLocation();

	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			variant="dark"
			fixed="bottom"
			className="bottom-nav">
			<Container fluid>
				<Navbar.Collapse className="d-flex justify-content-center">
					<Nav className="flex-row">
						{links.map((link, index) => (
							<Nav.Link
								key={link}
								as={Link}
								to={link}
								className={`mx-4 ${
									location.pathname === link ? "active" : ""
								}`}>
								<FontAwesomeIcon
									icon={icons[index]}
									className="bottom-nav-icons"
									size="xl"
								/>
							</Nav.Link>
						))}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
