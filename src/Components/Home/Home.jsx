import {Container, Row, Col} from "react-bootstrap";

export default function Home() {
    return (
        <Container fluid className="page-container d-flex align-items-center justify-content-center" style={{ height: "100vh", color: "white" }}>
            <Row>
                <Col>
                    <h1>Home</h1>
                </Col>
            </Row>
        </Container>
    );
}