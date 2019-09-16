import React, { useEffect, useState } from 'react'
import Header from './Header'
import Past from '../pages/Past'
import How from '../pages/How'
import Logi from '../pages/Logi'
//import Search from './Search'
import List from './List'
import { Route } from 'react-router-dom'

const request = new Request('../../public/api.json', {
    headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json"
    })
})

const getData = () => {
    return fetch(request)
        .then(response => response.json())
        .then(response => response)
}

const App = () => {
    const [characters, setCharacters] = useState({})
//     const [originalcharacters, setOriginalcharacters] = useState([])
//     const [fiterCharacter, setFiltercharacters] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const characters = await getData()
            //setOriginalcharacters(characters)
            //const listcharacters = getcharacters(characters)
            setCharacters(characters)
        }

        fetchData()
    }, [])

//     const filtercharacters = (term) => {
//         if (term) {
//             const filteredcharacters = originalcharacters.characters.filter(movie => movie.title.toLowerCase().includes(term.toLowerCase()))
//             // set state with filtered characters
//             const result = Object.keys(characters).map((item) => {
//                 return characters[item].filter(movie => movie.title === filteredcharacters[0].title)
//             })

//             setFiltercharacters(result)
//         }

//         else {
//             setFiltercharacters(originalcharacters)
//         }
//     }

    return (
        <>
            <div className="top-header">
                <Header text='Rule of Thumb' />
                <Route exact path="/pages/Past" component={Past} />
                <Route exact path="/pages/How " component={How} />
                <Route exact path="/pages/Logi" component={Logi} />
            </div>
            <Route exact path='/' render={(() => <List characters={characters}/> )} />
        </>
    )
}

export default App
