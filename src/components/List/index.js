import React from 'react'
import './style.css'

const List = props => {
    const { characters } = props
    console.log(characters)

    return (
            <>
            { Object.keys(characters).map((item, index) => {
                return <div className="card">
                            <ul>
                                <h2 key={index}>{item}</h2>
                            </ul>
                        </div>
                }) }
            </>
    )
}
export default List
