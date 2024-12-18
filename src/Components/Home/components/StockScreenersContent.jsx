import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

export default function StockScreenersContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const screener = location.state?.screener;

  if (!screener) {
    navigate("/");
    return null;
  }

  return (
    <Container className="mt-5">
      <Card className="bg-dark text-white p-4">
        <Card.Body>
          <Card.Title className="fw-bold">{screener.title}</Card.Title>
          <Card.Text>{screener.description}</Card.Text>
          <Button variant="primary" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
