import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TopNav from "./Components/TopNav/TopNav.jsx";
import BottomNav from "./Components/BottomNav/BottomNav.jsx";
import Home from "./Components/Home/Home.jsx";
import Discussions from "./Components/Discussions/Discussions.jsx";
import Trends from "./Components/Trends/Trends.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import "./App.css";

function Main() {
  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} classNames="slide" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/discussions" element={<Discussions />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default function App() {
  return (
    <Router>
      <TopNav />
      <Main />
      <BottomNav />
    </Router>
  );
}
