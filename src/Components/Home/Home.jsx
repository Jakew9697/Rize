import { useState } from "react";
import { Container, Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faCaretDown,
  faCaretUp,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import whyInvestImg from "../../assets/whyinvest.webp";
import whatIsTheStockMarketImg from "../../assets/whatisthestockmarket.webp";
import setYourGoalsImg from "../../assets/setyourgoals.webp";
import understandingChartsImg from "../../assets/understandingcharts.jpg";
import whatIsAStockImg from "../../assets/whatisastock.webp";
import whatIsAnOptionImg from "../../assets/whatisanoption.jpg";
import isCryptocurrencyAScamImg from "../../assets/iscryptocurrencyascam.webp";
import "./Home.css";

export default function Home() {
  // State to toggle showing more or less stock screeners
  const [showMoreStockScreeners, setShowMoreStockScreeners] = useState(false);

  // Learn section cards array
  const learnCards = [
    { title: "Why Invest?", img: whyInvestImg },
    { title: "What is the Stock Market?", img: whatIsTheStockMarketImg },
    { title: "Set Your Goals", img: setYourGoalsImg },
    { title: "Understanding Charts", img: understandingChartsImg },
    { title: "What's a Stock?", img: whatIsAStockImg },
    { title: "Whats an Option?", img: whatIsAnOptionImg },
    { title: "Is Cryptocurrency a Scam?", img: isCryptocurrencyAScamImg },
  ];

  // Stock screeners section list items array
  const stockScreeners = [
    {
      title: "Daily Price Jumps",
      description: "Stocks with the biggest price jumps today",
    },
    {
      title: "Daily Price Drops",
      description: "Stocks with the biggest price drops today",
    },
    {
      title: "Upcoming Earnings Reports",
      description: "Companies reporting earnings in the next 2 weeks",
    },
    {
      title: "Most Active Stocks",
      description: "Stocks with the highest trading volume today",
    },
    {
      title: "Top Gainers",
      description: "Stocks with the biggest percentage gains today",
    },
    {
      title: "Top Losers",
      description: "Stocks with the biggest percentage losses today",
    },
  ];

  return (
    <Container fluid className="home-container mb-5 page-container">
      <Row>
        <Col
          xs={6}
          className="home-stock-screeners-title d-flex justify-content-start align-items-center mt-3">
          <h5 className="fw-bold">Stock Screeners</h5>
        </Col>
        <Col
          xs={6}
          className="home-stock-screeners-info-icon d-flex justify-content-end align-items-center mt-2">
          <FontAwesomeIcon icon={faCircleExclamation} size="lg" />
        </Col>
      </Row>

      {/* Stock Screeners List */}
      <Row>
        <Col>
          <ListGroup as="ol" variant="flush" className="home-stock-screeners-list">
            {stockScreeners.map((screener, idx) => (
              <ListGroup.Item
                key={idx}
                as="li"
                className={`home-stock-screeners-list-item ${
                  idx > 2 && !showMoreStockScreeners ? "collapsed" : ""
                } d-flex justify-content-between align-items-center`}>
                <div>
                  <div className="fw-bold">{screener.title}</div>
                  <p className="mb-0">{screener.description}</p>
                </div>
                <FontAwesomeIcon icon={faChevronRight} />
              </ListGroup.Item>
            ))}
          </ListGroup>

          {/* Show More / Show Less Button */}
          <div className="d-flex justify-content-end mt-2">
            <Button
              variant="link"
              className="home-stock-screeners-show-more text-end"
              onClick={() => setShowMoreStockScreeners(!showMoreStockScreeners)}
              aria-expanded={showMoreStockScreeners}
              aria-controls="hidden-screeners">
              {showMoreStockScreeners ? "Show Less" : "Show More"}
              <FontAwesomeIcon
                icon={showMoreStockScreeners ? faCaretUp : faCaretDown}
                className="ms-2"
                size="lg"
              />
            </Button>
          </div>
        </Col>
      </Row>

      {/* Learn Section */}
      <Row>
        <Col
          xs={12}
          className="home-learn-title d-flex justify-content-start align-items-center">
          <h5 className="fw-bold">Learn</h5>
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <div className="learn-cards-container p-2 d-flex">
            {learnCards.map((learnCard, idx) => (
              <Card key={idx} className="bg-dark text-white learn-card">
                <Card.Img
                  src={learnCard.img}
                  alt={`Learn Card ${idx + 1}`}
                  className="learn-card-img"
                />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                  <Card.Title className="fw-bold">{learnCard.title}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            ))}
          </div>
        </Col>
      </Row>

      {/* News Section */}
      <Row>
        <Col
          xs={12}
          className="home-news-title d-flex justify-content-start align-items-center">
          <h5 className="fw-bold">News</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="news-cards-container p-2">
            {stockScreeners.map((newsCard, idx) => (
              <Card key={idx} className="bg-dark text-white news-card mb-3">
                <Card.Img
                  src={"https://via.placeholder.com/300x200"}
                  alt={`News ${idx}`}
                />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                  <Card.Title className="fw-bold">{newsCard.title}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
