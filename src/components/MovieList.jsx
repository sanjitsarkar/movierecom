import React from 'react'
import { Movie } from './Movie'

export const MovieList = ({movies,loading}) => {
    return (
        <div className="movie_list">
            {loading && <h1>Loading...</h1>}
            {
movies.map((movie)=>(<Movie movie = {movie}/>))
            }
        </div>
    )
}
