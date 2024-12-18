import { Nav, Navbar, Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBullhorn,
  faArrowTrendUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./BottomNav.css";

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  // Bottom nav paths and icons for navigation
  const navItems = [
    { 
      paths: ["/", "/stock-screener", "/learn"], // multiple paths for Home
      icon: faHouse 
    },
    { 
      paths: ["/discussions"], 
      icon: faBullhorn 
    },
    { 
      paths: ["/trends"], 
      icon: faArrowTrendUp 
    },
    { 
      paths: ["/profile"], 
      icon: faUser 
    },
  ];

  // Function to handle click behavior
  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="bottom" className="bottom-nav">
      <Container fluid>
        <Navbar.Collapse className="d-flex justify-content-between mx-3">
          <Nav className="flex-row w-100 justify-content-between">
            {navItems.map((item, idx) => (
              <Nav.Link
                key={idx}
                as="div"// setting as div bc nav was causing a reload when the active nav icon was clicked
                onClick={() => handleNavClick(item.paths[0])}
                className={`mx-4 ${
                  item.paths.includes(location.pathname) ? "active" : ""
                }`}
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon
                  icon={item.icon}
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
