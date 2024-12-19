import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faCaretDown,
  faCaretUp,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// images imports for now
import whyInvestImg from "../../assets/whyinvest.webp";
import whatIsTheStockMarketImg from "../../assets/whatisthestockmarket.webp";
import setYourGoalsImg from "../../assets/setyourgoals.webp";
import understandingChartsImg from "../../assets/understandingcharts.jpg";
import whatIsAStockImg from "../../assets/whatisastock.webp";
import whatIsAnOptionImg from "../../assets/whatisanoption.jpg";
import isCryptocurrencyAScamImg from "../../assets/iscryptocurrencyascam.webp";

import "./Home.css";

export default function Home() {
  const [showMoreStockScreeners, setShowMoreStockScreeners] = useState(false); // state to toggle showing more or less stock screeners
  const navigate = useNavigate(); // hook to navigate to different pages from the home page that arent in the bottom nav


    // Stock screeners section list items array hardcoded for now
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
        title: "New 52-Week Highs",
        description: "Stocks that broke their 52-week high today",
      },
      {
        title: "New 52-Week Lows",
        description: "Stocks that broke their 52-week low today",
      },
      {
        title: "Analyst Picks",
        description: "Stock picks from third-party analysts",
      },
    ];
    
  // Learn section cards array hardcoded for now
  const learnCards = [
    { title: "Why Invest?", img: whyInvestImg },
    { title: "What is the Stock Market?", img: whatIsTheStockMarketImg },
    { title: "Set Your Goals", img: setYourGoalsImg },
    { title: "Understanding Charts", img: understandingChartsImg },
    { title: "What's a Stock?", img: whatIsAStockImg },
    { title: "Whats an Option?", img: whatIsAnOptionImg },
    { title: "Is Cryptocurrency a Scam?", img: isCryptocurrencyAScamImg },
  ];

  // hardcoded news cards array for now
  const newsCards = [
    {
      title: "News 1",
    },
    {
      title: "News 2",
    },
    {
      title: "News 3",
    },
    {
      title: "News 4",
    },
  ];

  const handleNavigation = (path, state) => {
    navigate(path, { state });
  };

  return (
    <div className="home-container mb-4">
      <Row>
        <Col
          xs={6}
          className="home-stock-screeners-title d-flex justify-content-start align-items-center mt-2">
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
                onClick={() => handleNavigation("/stock-screener", { screener })}
                style={{ cursor: "pointer" }}
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
              <Card key={idx} className="bg-dark text-white learn-card" onClick={() => handleNavigation("/learn", { learnCard })}>
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
          <div className="news-cards-container">
            {newsCards.map((newsCard, idx) => (
              <Card key={idx} className="news-card bg-dark text-white mb-3" onClick={() => handleNavigation("/news", { newsCard })}>
                <Card.Img
                  src={"https://via.placeholder.com/300x200"}
                  alt={`News ${idx}`}
                />
                <Card.ImgOverlay className="news-card-image d-flex flex-column justify-content-end">
                  <Card.Title className="fw-bold">{newsCard.title}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}
