import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Star, Calendar, Clock } from "lucide-react";

const Home = () => {
  const [featuredMovies] = useState([
    {
      id: 1,
      title: "Oppenheimer",
      year: 2023,
      rating: 8.3,
      duration: "180 min",
      genre: "Biography, Drama, History",
      poster: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
      trailer: "uYPbbksJxIg",
      description: "Christopher Nolan'ning atom bombasi yaratuvchisi haqidagi biografik dramasi"
    },
    {
      id: 2,
      title: "Dune: Part Two",
      year: 2024,
      rating: 8.5,
      duration: "166 min",
      genre: "Action, Adventure, Drama",
      poster: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
      trailer: "Way9Dexny3w",
      description: "Paul Atreides'ning Arrakis sayyorasidagi davomi"
    },
    {
      id: 3,
      title: "The Batman",
      year: 2022,
      rating: 7.8,
      duration: "176 min",
      genre: "Action, Crime, Drama",
      poster: "https://m.media-amazon.com/images/M/MV5BM2MyNTAwZGEtNTAxNC00ODVjLTgzZjUtYmU0YjAzNzE1MjI2XkEyXkFqcGdeQXVyNDc2NTg3NzA@._V1_SX300.jpg",
      trailer: "mqqft2x_Aa4",
      description: "Robert Pattinson'ning Batman rolida yangi interpretatsiyasi"
    },
    {
      id: 4,
      title: "Top Gun: Maverick",
      year: 2022,
      rating: 8.2,
      duration: "130 min",
      genre: "Action, Drama",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
      trailer: "giXco2jaZ_4",
      description: "Tom Cruise'ning Top Gun davomi"
    },
    {
      id: 5,
      title: "Avatar: The Way of Water",
      year: 2022,
      rating: 7.6,
      duration: "192 min",
      genre: "Action, Adventure, Family",
      poster: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg",
      trailer: "d9MyW72ELq0",
      description: "James Cameron'ning Avatar davomi"
    },
    {
      id: 6,
      title: "Spider-Man: No Way Home",
      year: 2021,
      rating: 8.2,
      duration: "148 min",
      genre: "Action, Adventure, Fantasy",
      poster: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
      trailer: "JfVOs4VSpmA",
      description: "Tom Holland'ning Spider-Man uchinchi filmi"
    },
    {
      id: 7,
      title: "Interstellar",
      year: 2014,
      rating: 8.6,
      duration: "169 min",
      genre: "Sci-Fi, Drama",
      poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      trailer: "zSWdZVtXT7E",
      description: "Christopher Nolan'ning kosmik sayohati haqidagi dramasi"
    },
    {
      id: 8,
      title: "The Dark Knight",
      year: 2008,
      rating: 9.0,
      duration: "152 min",
      genre: "Action, Crime, Drama",
      poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      trailer: "EXeTwQWrcwY",
      description: "Heath Ledger'ning Joker rolida ajoyib ijrosi"
    },
    {
      id: 9,
      title: "Inception",
      year: 2010,
      rating: 8.8,
      duration: "148 min",
      genre: "Sci-Fi, Thriller",
      poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      trailer: "YoHD9XEInc0",
      description: "Leonardo DiCaprio'ning tush dunyosidagi sarguzashti"
    },
    {
      id: 10,
      title: "Parasite",
      year: 2019,
      rating: 8.5,
      duration: "132 min",
      genre: "Thriller, Drama",
      poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
      trailer: "5xH0HfJHsaY",
      description: "Bong Joon-ho'ning Oscar sovrindori thriller filmi"
    },
    {
      id: 11,
      title: "Joker",
      year: 2019,
      rating: 8.4,
      duration: "122 min",
      genre: "Crime, Drama, Thriller",
      poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      trailer: "zAGVQLHvwOY",
      description: "Joaquin Phoenix'ning Joker rolida ajoyib ijrosi"
    },
    {
      id: 12,
      title: "1917",
      year: 2019,
      rating: 8.2,
      duration: "119 min",
      genre: "Drama, War",
      poster: "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg",
      trailer: "YqNYrYUiMfg",
      description: "Birinchi jahon urushi haqidagi dramatik film"
    }
  ]);

  const [currentHero, setCurrentHero] = useState(0);

  return (
    <div className="home">
      {/* Hero Section with Featured Movie */}
      <section className="hero-slider">
        <div className="hero-movie" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(${featuredMovies[currentHero].poster})`
        }}>
          <div className="hero-content">
            <div className="hero-info">
              <h1 className="hero-title">{featuredMovies[currentHero].title}</h1>
              <div className="hero-meta">
                <span className="rating">
                  <Star size={16} fill="gold" color="gold" />
                  {featuredMovies[currentHero].rating}
                </span>
                <span className="year">
                  <Calendar size={16} />
                  {featuredMovies[currentHero].year}
                </span>
                <span className="duration">
                  <Clock size={16} />
                  {featuredMovies[currentHero].duration}
                </span>
              </div>
              <p className="hero-description">{featuredMovies[currentHero].description}</p>
              <div className="hero-buttons">
                <Link to={`/movie/${featuredMovies[currentHero].id}`} className="play-button">
                  <Play size={20} fill="white" />
                  Tomosha qilish
                </Link>
                <button className="info-button">
                  Batafsil ma'lumot
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Navigation Dots */}
        <div className="hero-dots">
          {featuredMovies.slice(0, 4).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentHero ? 'active' : ''}`}
              onClick={() => setCurrentHero(index)}
            />
          ))}
        </div>
      </section>
      
      {/* Featured Movies Grid */}
      <section className="featured-section">
        <div className="section-header">
          <h2>Mashhur kinolar</h2>
          <Link to="/movies" className="view-all">
            Barchasini ko'rish →
          </Link>
        </div>
        
        <div className="movies-carousel">
          {featuredMovies.map((movie) => (
            <div key={movie.id} className="movie-card-featured">
              <div className="movie-poster-container">
                <img 
                  src={movie.poster} 
                  alt={movie.title}
                  className="movie-poster-img"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x450/333/fff?text=No+Image';
                  }}
                />
                <div className="movie-overlay">
                  <button 
                    className="play-overlay"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${movie.trailer}`, '_blank')}
                  >
                    <Play size={24} fill="white" />
                  </button>
                </div>
              </div>
              
              <div className="movie-info-featured">
                <h3 className="movie-title">{movie.title}</h3>
                <div className="movie-meta">
                  <span className="movie-rating">
                    <Star size={14} fill="gold" color="gold" />
                    {movie.rating}
                  </span>
                  <span className="movie-year">{movie.year}</span>
                </div>
                <p className="movie-genre">{movie.genre}</p>
                <Link to={`/movie/${movie.id}`} className="watch-btn">
                  Tomosha qilish
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Janrlar bo'yicha</h2>
        <div className="categories-grid">
          <div className="category-card action">
            <h3>Jangari</h3>
            <p>120+ kinolar</p>
          </div>
          <div className="category-card comedy">
            <h3>Komediya</h3>
            <p>85+ kinolar</p>
          </div>
          <div className="category-card drama">
            <h3>Drama</h3>
            <p>95+ kinolar</p>
          </div>
          <div className="category-card sci-fi">
            <h3>Fantastika</h3>
            <p>60+ kinolar</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;