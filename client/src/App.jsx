import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Favorite from "./pages/Favorite";
import MovieDetails from "./pages/MovieDetails";
import MyBookings from "./pages/MyBookings";
import SeatLayout from "./pages/SeatLayout";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/bookings" element={<MyBookings />} />
          <Route path="/seat-layout/:movieId" element={<SeatLayout />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
