// CHANGE THIS TO MAKE IT A MESSAGES OFFCANVAS INSTEAD OF THE NOTIFICATIONS OFFCANVAS
import PropTypes from "prop-types";
import { Offcanvas, Badge, ListGroup, Image } from "react-bootstrap";
import "./css/MessagesOffcanvas.css";

export default function NotificationsOffcanvas({
	show,
	handleCloseMessages,
	messages,
}) {
	return (
		<Offcanvas
			className="messages-oc"
			show={show}
			onHide={handleCloseMessages}
			placement="bottom">
			<Offcanvas.Header closeButton>
				<Offcanvas.Title className="messages-oc-title fs-1">
					Direct Messages
				</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body className="messages-oc-body">
				<ListGroup as="ol" variant="flush">
					{messages.map((message) => (
						<ListGroup.Item
							key={message.id}
							as="li"
							className="d-flex justify-content-between align-items-start messages-oc-list">
							<div className="d-flex align-items-center">
								<Image
									src="https://via.placeholder.com/40"
									roundedCircle
									className="me-3"
									alt="User Profile"
									style={{ width: "50px", height: "50px" }}
								/>
								<div className="ms-2 me-auto">
									<div className="messages-oc-list-subheadings fw-bold">
										{message.title}
									</div>
									<p className="messages-oc-list-message mb-0">
										{message.message}
									</p>


								</div>
							</div>
							<Badge className="notifications-oc-list-badge" pill>
								{message.badgeCount}
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
	handleCloseMessages: PropTypes.func.isRequired,
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			message: PropTypes.string.isRequired,
			badgeCount: PropTypes.number.isRequired,
		})
	).isRequired,
};
