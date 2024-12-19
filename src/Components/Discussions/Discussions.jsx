import { Container, Row, Col } from "react-bootstrap";

export default function Discussions() {
  return (
    <Container fluid className="discussions-container page-container">
      <Row>
        <Col className="d-flex justify-content-center align-items-center" style={{ color: "white" }}>
          <h2>Discussions Page</h2>
        </Col>
      </Row>
    </Container>
  );
}
