import PropTypes from "prop-types";
import { Offcanvas, Badge, ListGroup, Image } from "react-bootstrap";
import "./css/NotificationsOffcanvas.css";

export default function NotificationsOffcanvas({ show, handleCloseNotifications, notifications }) {
  return (
    <Offcanvas className="notifications-oc" show={show} onHide={handleCloseNotifications} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="notifications-oc-title fs-1">
          Notifications
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="notifications-oc-body">
        <ListGroup as="ol" variant="flush">
          {notifications.map((notification) => (
            <ListGroup.Item
              key={notification.id}
              as="li"
              className="d-flex justify-content-between align-items-start notifications-oc-list"
            >
              <div className="d-flex align-items-center">
                {/* Rounded Profile Image */}
                <Image
                  src="https://via.placeholder.com/40" // Replace with actual image URLs
                  roundedCircle
                  className="me-3"
                  alt="User Profile"
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="ms-2 me-auto">
                  <div className="notifications-oc-list-subheadings fw-bold">
                    {notification.title}
                  </div>
                  <p className="notifications-oc-list-message mb-0">
                    {notification.message}
                  </p>
                </div>
              </div>
              <Badge className="notifications-oc-list-badge" pill>
                {notification.badgeCount}
              </Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

NotificationsOffcanvas.propTypes = {
  show: PropTypes.bool.isRequired,
  handleCloseNotifications: PropTypes.func.isRequired,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      badgeCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
