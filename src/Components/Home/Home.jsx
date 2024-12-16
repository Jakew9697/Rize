/* 
Terms to search for url links for learn sections to make cards clickable to redirect you to links
-Resistance and support
-Liquidity
-supply zone and demand zone
- m2 supply (general market sentiment)
-rsi relative strength index
-moving averages 50 and 200 day and how they relate to support and resistance
-what is an options trade
- what is a call and put
-what is a short and long
-what is a stop loss
-what is a trailing stop loss
-what is a limit order
-what is a market order
-what is a stop limit order
-what is a trailing stop limit order
-what is a trailing stop market order
*/

import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleExclamation,
	faCaretDown,
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
	const learnCards = [
		{
			title: "Why Invest?",
			img: whyInvestImg,
		},
		{
			title: "What is the Stock Market?",
			img: whatIsTheStockMarketImg,
		},
		{
			title: "Set Your Goals",
			img: setYourGoalsImg,
		},
		{
			title: "Understanding Charts",
			img: understandingChartsImg,
		},
		{
			title: "What's a Stock?",
			img: whatIsAStockImg,
		},
		{
			title: "Whats an Option?",
			img: whatIsAnOptionImg,
		},
		{
			title: "Is Crptocurrency a Scam?",
			img: isCryptocurrencyAScamImg,
		},
	];

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
	];

	const newsCards = [
		{
			title: "News Title 1",
			description: "News Description",
			img: "https://via.placeholder.com/300x200",
		},
		{
			title: "News Title 2",
			description: "News Description",
			img: "https://via.placeholder.com/300x200",
		},
		{
			title: "News Title 3",
			description: "News Description",
			img: "https://via.placeholder.com/300x200",
		},
		{
			title: "News Title 4",
			description: "News Description",
			img: "https://via.placeholder.com/300x200",
		},
		{
			title: "News Title 5",
			description: "News Description",
			img: "https://via.placeholder.com/300x200",
		},
		{
			title: "News Title 6",
			description: "News Description",
			img: "https://via.placeholder.com/300x200",
		},
		{
			title: "News Title 7",
			description: "News Description",
			img: "https://via.placeholder.com/300x200",
		},
	];

	return (
		<Container fluid className="home-container mb-5">
			{/* Stock Screeners Section */}
			<Row className="mt-2">
				<Col
					xs={6}
					className="d-flex justify-content-start align-items-center mb-2">
					<h5>
						<b>Stock Screeners</b>
					</h5>
				</Col>
				<Col
					xs={6}
					className="d-flex justify-content-end align-items-center mb-2">
					<FontAwesomeIcon icon={faCircleExclamation} />
				</Col>
			</Row>
			<Row>
				<Col>
					<ListGroup
						as="ol"
						variant="flush"
						className="home-stock-screener-list">
						{stockScreeners.map((screener, idx) => (
							<ListGroup.Item
								key={idx}
								as="li"
								className="d-flex justify-content-between align-items-start">
								<div className="d-flex align-items-center">
									<div className="me-3">
										<div className="fw-bold">{screener.title}</div>
										<p className="mb-0">{screener.description}</p>
									</div>
								</div>
							</ListGroup.Item>
						))}
					</ListGroup>
					<p className="mt-1">
						Show more <FontAwesomeIcon icon={faCaretDown} />
					</p>
				</Col>
				<hr />
			</Row>

			{/* Learn Section */}
			<Row>
				<Col
					xs={12}
					className="d-flex justify-content-start align-items-center">
					<h5>
						<b>Learn</b>
					</h5>
				</Col>
			</Row>
			<Row>
				<Col className="mb-3">
					<div className="learn-cards-container p-2">
						{learnCards.map((learnCard, idx) => (
							<Card key={idx} className="bg-dark text-white learn-card ">
								<Card.Img
									src={learnCard.img}
									alt={`Learn Card ${idx + 1}`}
									className="learn-card-img"
								/>
								<Card.ImgOverlay className="d-flex flex-column justify-content-end">
									<Card.Title className="fw-bold">{learnCard.title}</Card.Title>
									<Card.Text>{learnCard.text}</Card.Text>
								</Card.ImgOverlay>
							</Card>
						))}
					</div>
				</Col>
				<hr />
			</Row>

			{/* News Section */}
			<Row>
				<Col
					xs={12}
					className="d-flex justify-content-start align-items-center">
					<h5>
						<b>News</b>
					</h5>
				</Col>
			</Row>
			<Row>
				<Col>
					<div className="news-cards-container p-2">
						{newsCards.map((newsCard, idx) => (
							<Card key={idx} className="bg-dark text-white news-card mb-3">
								<Card.Img
									src={newsCard.img}
									alt={`News Card ${idx + 1}`}
									className="news-card-image"
								/>
								<Card.ImgOverlay className="d-flex flex-column justify-content-end">
									<Card.Title className="fw-bold">{newsCard.title}</Card.Title>
									<Card.Text>{newsCard.text}</Card.Text>
								</Card.ImgOverlay>
							</Card>
						))}
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<h5>Luke thinks im using a template...</h5>
				</Col>
			</Row>
			<Row></Row>
		</Container>
	);
}
