import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-[#0c0a20] px-4 pt-4">
        <Navbar />
        <div className="flex flex-col lg:flex-row w-full h-full gap-6 lg:h-9/12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
