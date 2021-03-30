import React, { useState } from "react"
import MovieCard from "./MovieCard.js"

export default function SearchMovies() {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])
  const searchMovies = async (e) => {
    e.preventDefault()

    const url = `https://api.themoviedb.org/3/search/movie?api_key=b2e594d821d4edcbc8068cf5936b83c3&query=${query}&page=1&include_adult=false`

    try {
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data.results)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Your search here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button">Search</button>
      </form>
      <div className="card-list">
        {movies //filter the results with a poster_path
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  )
}
