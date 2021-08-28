import React from 'react'

const GenreList = ({fetchMovies}) => {
    return (
        <div className="genre_list">
        <button onClick={(e)=>fetchMovies(e,"878")}>
            Sci-Fi
        </button> 
        <button onClick={(e)=>fetchMovies(e,"27")}>
            Horror
        </button> 
        <button onClick={(e)=>fetchMovies(e,"53")}>
            Thriller
        </button> 
        <button onClick={(e)=>fetchMovies(e,"35")}>
            Comedy
        </button> 
        <button onClick={(e)=>fetchMovies(e,"16")}>
            Animation
        </button> 
        </div>
    )
}

export default GenreList
