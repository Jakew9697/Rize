import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import NotificationsOffcanvas from "./components/NotificationsOffcanvas";
import MessagesOffcanvas from "./components/MessagesOffcanvas";
import "./TopNav.css";

export default function TopNav() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const handleCloseNotifications = () => setShowOffcanvas(false);
  const handleShowNotifications = () => setShowOffcanvas(true);
  const handleCloseMessages = () => setShowMessages(false);
  const handleShowMessages = () => setShowMessages(true);
  const notifications = [
    {
      id: 1,
      title: "New Message",
      message: "You have received a new message from John.",
      badgeCount: 1,
      profilePicture: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      title: "Friend Request",
      message: "Jane sent you a friend request.",
      badgeCount: 3,
      profilePicture: "https://via.placeholder.com/60",
    },
    {
      id: 3,
      title: "System Alert",
      message: "Your account password has been changed successfully.",
      badgeCount: 0,
      profilePicture: "https://via.placeholder.com/60",
    },
  ];

  const messages = [
    {
      id: 1,
      title: "Jane Doe",
      message: "Hey! How are you?",
      badgeCount: 1,
      profilePicture: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      title: "Jane Doe",
      message: "I saw your recent post. It was amazing!",
      badgeCount: 3,
      profilePicture: "https://via.placeholder.com/60",
    },
  ];

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="top-nav">
      <Container fluid>
        <Nav className="flex-row">
          <Nav.Link
            as={Link}
            to="/home"
            className="d-flex align-items-center"
            onClick={() => console.log("Home")}
          >
            <h2 className="m-0">Rize</h2>
          </Nav.Link>
        </Nav>
        <Nav className="d-flex flex-row justify-content-end">
          <Nav.Link
            className="me-4"
            onClick={(e) => {
              e.preventDefault();
              handleShowNotifications();
            }}
          >
            <FontAwesomeIcon icon={faBell} className="top-nav-icons" size="xl" />
          </Nav.Link>
          <Nav.Link
            onClick={(e) => {
              e.preventDefault();
              handleShowMessages();
            }}
          >
            <FontAwesomeIcon icon={faCommentDots} className="top-nav-icons" size="xl" />
          </Nav.Link>
        </Nav>

        <NotificationsOffcanvas
          show={showOffcanvas}
          handleCloseNotifications={handleCloseNotifications}
          notifications={notifications}
        />
        <MessagesOffcanvas
          show={showMessages}
          handleCloseMessages={handleCloseMessages}
          messages={messages}
        />
      </Container>
    </Navbar>
  );
}

