import React, { Component } from 'react'
import styled from 'styled-components'

import Builder from './components/Builder'
import Header from './components/Header'

const CARD_URL =
  'https://cors-anywhere.herokuapp.com/https://spellweaver-tcg.com/wp-content/themes/spellweavers/cards/cards.json'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`
class App extends Component {
  state = {
    cards: []
  }

  componentDidMount() {
    fetch(CARD_URL)
      .then(res => res.json())
      .then(json => this.setState({ cards: json }))
  }

  render() {
    return (
      <Container className="App">
        <Header />
        <Builder cards={this.state.cards} />
      </Container>
    )
  }
}

export default App
