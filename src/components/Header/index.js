// @flow

import React from 'react'
import Menu from '../Menu'
import { Route } from 'react-router-dom'

import './style.css'

type Props = {
  text: string
}

const listMenu = {
	"past_trials": "Past trials",
	"highest_Rated": "How It works",
	"login": "Login/sign up"
}

const Header = (props: Props) => {
  const { text } = props

  return (
    <>
      <header className="app-header">
        <h1>{text}</h1>
        <Menu listMenu={listMenu} />
      </header>
      <Route exact path='/:id' render={(() => <Menu listMenu={listMenu} /> )}/>
    </>
  )
}

export default Header