import { Container, Row, Col } from "react-bootstrap";

export default function CreatePost() {
  return (
    <Container fluid className="create-post-container mb-5 page-container">
      <Row>
        <Col className="d-flex justify-content-center align-items-center" style={{color: "white" }}>
          <h2>CreatePost</h2>
        </Col>
      </Row>
    </Container>
  );
}