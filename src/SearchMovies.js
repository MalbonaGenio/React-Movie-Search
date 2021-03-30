import React from "react"

function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault()
    console.log("submitting")
    const query = "jurassic"
    const url = `https://api.themoviedb.org/3/search/movie?api_key=b2e594d821d4edcbc8068cf5936b83c3&query=${query}&page=1&include_adult=false`

    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
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
