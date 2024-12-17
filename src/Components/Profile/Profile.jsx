import { Container, Row, Col } from "react-bootstrap";

export default function Profile() {
  return (
    <Container fluid className="discussions-container mb-5 page-container">
      <Row>
        <Col className="d-flex justify-content-center align-items-center" style={{ height: "80vh", color: "white" }}>
          <h2>Profile Page</h2>
        </Col>
      </Row>
    </Container>
  );
}