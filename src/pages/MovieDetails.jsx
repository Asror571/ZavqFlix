import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Play, Star, Calendar, Clock } from "lucide-react";
import ReactPlayer from "react-player";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);

  // Mock data - keyinchalik API dan olinadi
  const movies = {
    1: {
      id: 1,
      title: "Oppenheimer",
      year: 2023,
      rating: 8.3,
      duration: "180 min",
      genre: ["Biography", "Drama", "History"],
      director: "Christopher Nolan",
      cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
      poster: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
      backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=600&fit=crop",
      trailer: "uYPbbksJxIg",
      description: "Christopher Nolan'ning atom bombasi yaratuvchisi J. Robert Oppenheimer haqidagi biografik dramasi. Film Amerika tarixidagi eng muhim va xavfli kashfiyotlardan birini tasvirlaydi.",
      plot: "Ikkinchi jahon urushi paytida Amerika hukumati maxfiy Manhattan loyihasini boshlaydi. Fizik J. Robert Oppenheimer atom bombasini yaratish uchun olimlar jamoasini boshqaradi. Ammo bu kashfiyot butun dunyoni o'zgartiradi va Oppenheimer o'z ijodining oqibatlari bilan kurashishga majbur bo'ladi.",
      language: "English",
      country: "USA",
      budget: "$100M",
      boxOffice: "$952.8M"
    },
    2: {
      id: 2,
      title: "Dune: Part Two",
      year: 2024,
      rating: 8.5,
      duration: "166 min",
      genre: ["Action", "Adventure", "Drama"],
      director: "Denis Villeneuve",
      cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Josh Brolin"],
      poster: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
      backdrop: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1200&h=600&fit=crop",
      trailer: "Way9Dexny3w",
      description: "Paul Atreides'ning Arrakis sayyorasidagi epik sarguzashtining davomi. U o'z taqdirini qabul qilish va sevgan odamlarini himoya qilish o'rtasida tanlov qilishga majbur.",
      plot: "Paul Atreides Chani va Fremen qabilasi bilan birga o'z oilasini yo'q qilganlarga qarshi kurashadi. Ikki sevgi o'rtasida tanlov qilishga majbur bo'lgan Paul, dahshatli kelajakni oldini olish uchun faqat u ko'ra oladigan yo'lni tanlaydi.",
      language: "English",
      country: "USA",
      budget: "$190M",
      boxOffice: "$714.4M"
    }
  };

  useEffect(() => {
    const movieData = movies[id];
    if (movieData) {
      setMovie(movieData);
    }
  }, [id]);

  if (!movie) {
    return (
      <div className="loading">
        <h2>Kino ma'lumotlari yuklanmoqda...</h2>
      </div>
    );
  }

  return (
    <div className="movie-details">
      {/* Hero Section */}
      <div className="movie-hero" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(${movie.backdrop})`
      }}>
        <div className="movie-hero-content">
          <div className="movie-poster-large">
            <img src={movie.poster} alt={movie.title} />
          </div>
          
          <div className="movie-info-main">
            <h1 className="movie-title-large">{movie.title}</h1>
            
            <div className="movie-meta-large">
              <span className="rating-large">
                <Star size={20} fill="gold" color="gold" />
                {movie.rating}/10
              </span>
              <span className="year-large">
                <Calendar size={18} />
                {movie.year}
              </span>
              <span className="duration-large">
                <Clock size={18} />
                {movie.duration}
              </span>
            </div>
            
            <div className="movie-genres">
              {movie.genre.map((g, index) => (
                <span key={index} className="genre-tag">{g}</span>
              ))}
            </div>
            
            <p className="movie-description-large">{movie.description}</p>
            
            <div className="movie-actions">
              <button 
                className="play-trailer-btn"
                onClick={() => setIsTrailerPlaying(true)}
              >
                <Play size={20} fill="white" />
                Treyler ko'rish
              </button>
              
              <button 
                className="watch-free-btn"
                onClick={() => window.open(`https://www.youtube.com/watch?v=${movie.trailer}`, '_blank')}
              >
                Bepul tomosha qilish
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trailer Modal */}
      {isTrailerPlaying && (
        <div className="trailer-modal" onClick={() => setIsTrailerPlaying(false)}>
          <div className="trailer-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-trailer"
              onClick={() => setIsTrailerPlaying(false)}
            >
              ×
            </button>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${movie.trailer}`}
              width="100%"
              height="100%"
              playing={true}
              controls={true}
            />
          </div>
        </div>
      )}

      {/* Movie Details Content */}
      <div className="movie-content">
        <div className="movie-details-grid">
          <div className="movie-main-content">
            <section className="plot-section">
              <h2>Syujet</h2>
              <p>{movie.plot}</p>
            </section>
            
            <section className="cast-section">
              <h2>Aktyorlar</h2>
              <div className="cast-grid">
                {movie.cast.map((actor, index) => (
                  <div key={index} className="cast-member">
                    <div className="actor-avatar">
                      {actor.charAt(0)}
                    </div>
                    <span>{actor}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
          <div className="movie-sidebar">
            <div className="movie-info-card">
              <h3>Kino haqida</h3>
              <div className="info-item">
                <strong>Rejissyor:</strong>
                <span>{movie.director}</span>
              </div>
              <div className="info-item">
                <strong>Yil:</strong>
                <span>{movie.year}</span>
              </div>
              <div className="info-item">
                <strong>Davomiyligi:</strong>
                <span>{movie.duration}</span>
              </div>
              <div className="info-item">
                <strong>Reyting:</strong>
                <span>{movie.rating}/10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
