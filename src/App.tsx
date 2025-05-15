import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Loyalty from "./pages/Loyalty";
import OurChallenge from "./pages/OurChallenge";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-[#0c0a20] mx-auto px-4 pt-4">
        <div className="container mx-auto max-w-screen-2xl">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loyalty" element={<Loyalty />} />
            <Route path="/our-challenge" element={<OurChallenge />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
