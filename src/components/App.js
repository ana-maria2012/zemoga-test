import React, { useEffect, useState } from 'react'
import Header from './Header'
import Search from './Search'
import List from './List'
import Detail from './Detail'
import { Route } from 'react-router-dom'

const request = new Request('https://wookie.codesubmit.io/movies', {
    headers: new Headers({
        Authorization: 'Bearer Wookie2019'
    }),
    method: 'GET'
})

const getData = () => {
    return fetch(request)
        .then(response => response.json())
        .then(response => response)
}

const App = () => {
    const [movies, setMovies] = useState({})
    const [originalMovies, setOriginalMovies] = useState([])
    const [filterMovie, setFilterMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const movies = await getData()
            setOriginalMovies(movies)
            const listMovies = getMoviesByCategory(movies.movies)

            setMovies(listMovies)
        }

        fetchData()
    }, [])

    const getMoviesByCategory = (movies) => {
        let genres = movies.map(movie => movie.genres).flat()
        const genresMain = new Set(genres)
        const category = {}
        for(const key of genresMain) {
            category[key] =  []
        }

        movies.forEach(item => {
            genresMain.forEach(genre => {
                if(item.genres.includes(genre)) {
                    category[genre].push(item)
                }
            })
        })

        return category
    }

    const filterMovies = (term) => {
        if (term) {
            const filteredMovies = originalMovies.movies.filter(movie => movie.title.toLowerCase().includes(term.toLowerCase()))
            // set state with filtered movies
            const result = Object.keys(movies).map((item) => {
                return movies[item].filter(movie => movie.title === filteredMovies[0].title)
            })

            setFilterMovies(result)
        }

        else {
            setFilterMovies(originalMovies)
        }
    }

    return (
        <>
            <Header text='WOOKIE MOVIES' />
            <Search search={filterMovies}/>
            <Route exact path='/' render={(() => <List movies={filterMovie.length ? filterMovie : movies}/> )} />
            <Route exact path='/:id' render={(() => <Detail movies={originalMovies} /> )} />
        </>
    )
}

export default App
