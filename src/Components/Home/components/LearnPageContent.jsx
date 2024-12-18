import {useLocation, useNavigate} from "react-router-dom";
import {Container, Card, Button} from "react-bootstrap";

export default function LearnPageContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const learnCard = location.state?.learnCard;

  if (!learnCard) {
    navigate("/");
    return null;
  }

  return (
    <Container className="mt-5">
      <Card className="bg-dark text-white p-4">
        <Card.Body>
          <Card.Title className="fw-bold">{learnCard.title}</Card.Title>
          <Button variant="primary" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}