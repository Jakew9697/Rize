import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useRef, createRef, Suspense, lazy } from "react";
import { Spinner } from "react-bootstrap";
import TopNav from "./Components/TopNav/TopNav.jsx";
import BottomNav from "./Components/BottomNav/BottomNav.jsx";
import "./App.css";

// lazy-loading components for code-splitting and performance optimization
const Home = lazy(() => import("./Components/Home/Home.jsx"));
const Discussions = lazy(() => import("./Components/Discussions/Discussions.jsx"));
const Trends = lazy(() => import("./Components/Trends/Trends.jsx"));
const Profile = lazy(() => import("./Components/Profile/Profile.jsx"));
const StockScreenersContent = lazy(() =>
  import("./Components/Home/components/StockScreenersContent.jsx")
);
const LearnPageContent = lazy(() =>
  import("./Components/Home/components/LearnPageContent.jsx")
);

function Main() {
  const location = useLocation(); // hook to get the current location of the app for transitions between all pages
  const nodeRefs = useRef({}); // stores refs dynamically for each page

  if (!nodeRefs.current[location.key]) {
    nodeRefs.current[location.key] = createRef(); // creating a reference for the current page
  }

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="slide"
        nodeRef={nodeRefs.current[location.key]}
      >
        <div ref={nodeRefs.current[location.key]} className="page-container">
          <Suspense fallback={<div className="text-center mt-5"><Spinner animation="Grow" variant="primary" /></div>}>
            <Routes location={location}>
              {/* Paths from home page */}
              <Route path="/stock-screener" element={<StockScreenersContent />} />
              <Route path="/learn" element={<LearnPageContent />} />

              {/* Bottom nav paths */}
              <Route path="/" element={<Home />} />
              <Route path="/discussions" element={<Discussions />} />
              <Route path="/trends" element={<Trends />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </div>
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
