import { Link } from "react-router-dom"

import { FaStar } from "react-icons/fa"

import "./MovieCard.css"

const imageURL = import.meta.env.VITE_IMG

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imageURL + movie.poster_path} alt={movie.title} />
      <h2 className="subtitle">{movie.title}</h2>
      <p className="nota">
        <FaStar /> {movie.vote_average}
      </p>
      <button className="btnDetalhes">
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
      </button>
    </div>
  )
}

export default MovieCard
