import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Star, Calendar, Play } from "lucide-react";

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");

  const movies = [
    {
      id: 1,
      title: "Oppenheimer",
      year: 2023,
      rating: 8.3,
      genre: "biography",
      duration: "180 min",
      poster: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
      trailer: "uYPbbksJxIg",
      description: "Christopher Nolan'ning atom bombasi yaratuvchisi haqidagi biografik dramasi"
    },
    {
      id: 2,
      title: "Dune: Part Two",
      year: 2024,
      rating: 8.5,
      genre: "sci-fi",
      duration: "166 min",
      poster: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
      trailer: "Way9Dexny3w",
      description: "Paul Atreides'ning Arrakis sayyorasidagi davomi"
    },
    {
      id: 3,
      title: "The Batman",
      year: 2022,
      rating: 7.8,
      genre: "action",
      duration: "176 min",
      poster: "https://m.media-amazon.com/images/M/MV5BM2MyNTAwZGEtNTAxNC00ODVjLTgzZjUtYmU0YjAzNzE1MjI2XkEyXkFqcGdeQXVyNDc2NTg3NzA@._V1_SX300.jpg",
      trailer: "mqqft2x_Aa4",
      description: "Robert Pattinson'ning Batman rolida yangi interpretatsiyasi"
    },
    {
      id: 4,
      title: "Top Gun: Maverick",
      year: 2022,
      rating: 8.2,
      genre: "action",
      duration: "130 min",
      poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
      trailer: "giXco2jaZ_4",
      description: "Tom Cruise'ning Top Gun davomi"
    },
    {
      id: 5,
      title: "Avatar: The Way of Water",
      year: 2022,
      rating: 7.6,
      genre: "sci-fi",
      duration: "192 min",
      poster: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg",
      trailer: "d9MyW72ELq0",
      description: "James Cameron'ning Avatar davomi"
    },
    {
      id: 6,
      title: "Spider-Man: No Way Home",
      year: 2021,
      rating: 8.2,
      genre: "action",
      duration: "148 min",
      poster: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
      trailer: "JfVOs4VSpmA",
      description: "Tom Holland'ning Spider-Man uchinchi filmi"
    },
    {
      id: 7,
      title: "Interstellar",
      year: 2014,
      rating: 8.6,
      genre: "sci-fi",
      duration: "169 min",
      poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      trailer: "zSWdZVtXT7E",
      description: "Christopher Nolan'ning kosmik sayohati haqidagi dramasi"
    },
    {
      id: 8,
      title: "The Dark Knight",
      year: 2008,
      rating: 9.0,
      genre: "action",
      duration: "152 min",
      poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      trailer: "EXeTwQWrcwY",
      description: "Heath Ledger'ning Joker rolida ajoyib ijrosi"
    },
    {
      id: 9,
      title: "Inception",
      year: 2010,
      rating: 8.8,
      genre: "sci-fi",
      duration: "148 min",
      poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      trailer: "YoHD9XEInc0",
      description: "Leonardo DiCaprio'ning tush dunyosidagi sarguzashti"
    },
    {
      id: 10,
      title: "Parasite",
      year: 2019,
      rating: 8.5,
      genre: "thriller",
      duration: "132 min",
      poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
      trailer: "5xH0HfJHsaY",
      description: "Bong Joon-ho'ning Oscar sovrindori thriller filmi"
    },
    {
      id: 11,
      title: "Joker",
      year: 2019,
      rating: 8.4,
      genre: "drama",
      duration: "122 min",
      poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      trailer: "zAGVQLHvwOY",
      description: "Joaquin Phoenix'ning Joker rolida ajoyib ijrosi"
    },
    {
      id: 12,
      title: "1917",
      year: 2019,
      rating: 8.2,
      genre: "drama",
      duration: "119 min",
      poster: "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg",
      trailer: "YqNYrYUiMfg",
      description: "Birinchi jahon urushi haqidagi dramatik film"
    }
  ];

  const genres = [
    { value: "all", label: "Barcha janrlar" },
    { value: "action", label: "Jangari" },
    { value: "comedy", label: "Komediya" },
    { value: "drama", label: "Drama" },
    { value: "thriller", label: "Triller" },
    { value: "sci-fi", label: "Fantastika" },
    { value: "biography", label: "Biografiya" }
  ];

  const sortOptions = [
    { value: "popularity", label: "Mashhurlik bo'yicha" },
    { value: "rating", label: "Reyting bo'yicha" },
    { value: "year", label: "Yil bo'yicha" },
    { value: "title", label: "Nom bo'yicha" }
  ];

  const filteredMovies = movies
    .filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre === "all" || movie.genre === selectedGenre;
      return matchesSearch && matchesGenre;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "year":
          return b.year - a.year;
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  return (
    <div className="movies-page">
      <div className="movies-header">
        <h1>Kinolar katalogi</h1>
        <p>Eng yaxshi kinolarni toping va tomosha qiling</p>
        
        <div className="filters-container">
          <div className="search-container">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Kino nomini kiriting..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-controls">
            <div className="filter-group">
              <Filter size={16} />
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="filter-select"
              >
                {genres.map(genre => (
                  <option key={genre.value} value={genre.value}>
                    {genre.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="movies-results">
        <p className="results-count">
          {filteredMovies.length} ta kino topildi
        </p>
        
        <div className="movies-grid">
          {filteredMovies.map(movie => (
            <div key={movie.id} className="movie-card-grid">
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
                <div className="movie-rating-badge">
                  <Star size={12} fill="gold" color="gold" />
                  {movie.rating}
                </div>
              </div>
              
              <div className="movie-card-info">
                <h3 className="movie-card-title">{movie.title}</h3>
                <div className="movie-card-meta">
                  <span className="movie-year">
                    <Calendar size={14} />
                    {movie.year}
                  </span>
                  <span className="movie-duration">{movie.duration}</span>
                </div>
                <p className="movie-card-description">{movie.description}</p>
                <Link to={`/movie/${movie.id}`} className="watch-button-card">
                  Tomosha qilish
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {filteredMovies.length === 0 && (
          <div className="no-results">
            <div className="no-results-content">
              <h3>Hech qanday kino topilmadi</h3>
              <p>Qidiruv so'zini o'zgartiring yoki filtrlarni qayta sozlang</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
