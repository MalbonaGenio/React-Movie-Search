import React from "react"

function SearchMovies() {
  return (
    <div>
      <form className="form" onSubmit="##">
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Your search here"
        />
        <button className="button">Search</button>
      </form>
    </div>
  )
}

export default SearchMovies
