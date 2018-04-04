import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`

const Item = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 0.55rem;
  text-transform: uppercase;
  letter-spacing: 0.083rem;
  margin: 0 0.618em;
`

class NavItems extends Component {
  render() {
    return (
      <Container>
        <Item>Decks</Item>
        <Item>Strategy</Item>
        <Item>Getting Started</Item>
        <Item>Meta</Item>
        <Item>Deck Builder</Item>
        <Item>Other</Item>
      </Container>
    )
  }
}

export default NavItems
