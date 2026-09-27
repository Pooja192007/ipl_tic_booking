import "./App.css";
import {BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import Matches from "./Pages/Matches";
import Booking from "./Pages/Booking";
import Bookinghistory from "./Pages/Bookinghistory";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/history" element={<Bookinghistory />} />
      </Routes>

    </BrowserRouter>
  );
}
export default App;