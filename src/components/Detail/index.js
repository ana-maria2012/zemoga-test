

import React from 'react'
import './style.css'

type Summary = {
    detail: {
        slug: number,
        backdrop: string
    }
}

type Movie = {
    movies: Array<Object>
}

type DetailProps = {
    movies: Movie
}

const Detail = (props: DetailProps) => {

    const { movies, detail } = props
    const detail: Summary = movies.movies.find(item => item.slug === location.pathname.slice(1))

    return (
        <div className='container'>
            <img src={detail.backdrop} alt='moviepicture' />
            <div className='movieInfo'>
                <div>
                    <div className='movieText'>
                        <h3>{`Title: ${detail.title}`}</h3>
                        <h3>{`Year: ${detail.slug}`}</h3>
                    </div>
                    <div className='calification'></div>
                </div>
                <p>{`Movie Description: ${detail.overview}`}</p>
            </div>
        </div>

    )
}

export default Detail
