import React from 'react'
import './style.css'

const List = props => {
    const { characters } = props

    let detail = characters && characters.length > 0 ?
    characters.map( item =>
        <li className="detail" key={item.id}>
            <img src={item.img} alt={item.character}/>
            <h2>{item.character}</h2>
            <p>{item.description}</p>
        </li>
    ) : <span></span>;

    return (
        <ul>{detail}</ul>
    )
}
export default List
