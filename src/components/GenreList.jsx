import React from 'react'

const GenreList = ({getMovieInfo}) => {
    return (
        <div className="genre_list">
        <button onClick={()=>getMovieInfo("action")}>
            Action
        </button> 
        <button onClick={()=>getMovieInfo("adventure")}>
            Adventure
        </button> 
        <button onClick={()=>getMovieInfo("comedy")}>
            Comedy
        </button> 
        <button onClick={()=>getMovieInfo("sci-fi")}>
            Sci-Fi
        </button> 
        </div>
    )
}

export default GenreList
