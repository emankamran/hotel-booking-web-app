import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import { TopBar } from "./components/layout/TopBar";
import { Navigation } from "./components/layout/Navigation";
import { HeroSection } from "./components/layout/HeroSection";
import AboutUs from "./pages/AboutUs";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="">
        <TopBar />
        <Navigation />
        <HeroSection />
        <main className="flex-grow">
          <Routes>
            <Route path="/booking" element={<Booking />} />
            <Route path="/" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
