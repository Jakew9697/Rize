/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import TopNav from "./Components/TopNav/TopNav.jsx";
import BottomNav from "./Components/BottomNav/BottomNav.jsx";
import Home from "./Components/Home/Home.jsx";
import "./App.css";

export default function App() {
	return (
		<>
		<Router>
			<TopNav />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<BottomNav />
		</Router>
		</>
	);
}
