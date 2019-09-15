// @flow

import React from 'react'
import './style.css'

type Props = {
  text: string
}

const Header = (props: Props) => {
  const { text } = props

  return (
    <header className="App-header">
      <h1>{text}</h1>
    </header>
  );
};

export default Header;