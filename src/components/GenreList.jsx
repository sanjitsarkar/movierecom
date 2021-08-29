import React, { useRef,useState } from 'react'

const GenreList = ({fetchMovies}) => {
    const activeRef = useRef(undefined)
    const [active, setActive] = useState(false)
    const toggleClass = (e) =>{
        console.log("Hello")
        setActive(()=>false)
        e.currentTarget.classList.add('active')
    }
    return (
        <div className="genre_list">
        <button ref = {activeRef} 
        className = {active?"active":null}
         onClick={(e)=>{toggleClass(e);fetchMovies("878");}}>
            Sci-Fi
        </button> 
        <button 
        className = {active?"active":null}
        onClick={(e)=>{toggleClass(e);fetchMovies("27");}}>
            Horror
        </button> 
        <button 
        className = {active?"active":null}
        onClick={(e)=>{toggleClass(e);fetchMovies("53");}}>
            Thriller
        </button> 
        <button 
        className = {active?"active":null}
        onClick={(e)=>{toggleClass(e);fetchMovies("35");}}>
            Comedy
        </button> 
        <button 
        className = {active?"active":null}
        onClick={(e)=>{toggleClass(e);fetchMovies("16");}}>
            Animation
        </button> 
        </div>
    )
}

export default GenreList
