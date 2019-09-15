import React from 'react'
import { Link } from 'react-router-dom' 
import './style.css'

const List = props => {
    const { movies } = props

    return (
        <>
            { Object.keys(movies).map(genre => {
               if (movies[genre].length) {
                return (<ul key={genre}>
                    <h2>{`Genre ${genre}`}</h2>
                    { movies[genre].map((movie, index) => {
                        return (
                            <div key={index} className="card">
                                <Link to={`/${movie.slug}`}><img src={movie.backdrop} /></Link>
                                <Link to={`/${movie.slug}`}>{movie.title}</Link>
                            </div>
                        )
                    })}
                </ul>)
               } else {
                   return null
               }
            }) }
        </>
    )
}

export default List
