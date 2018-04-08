import React, { Component } from 'react'
import styled from 'styled-components'

import NavItems from './NavItems'

const Container = styled.div`
  display: flex;
  padding: 3.125rem 180px 0;
  max-width: 1610px;
  flex: 0 0 auto;
`

const Title = styled.h1`
  color: #000;
  font-size: 2.5rem;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: lowercase;
  border: 3px solid aquamarine;
`

class Header extends Component {
  render() {
    return (
      <Container>
        <Title>Deck Builder</Title>
        <NavItems />
      </Container>
    )
  }
}

export default Header
