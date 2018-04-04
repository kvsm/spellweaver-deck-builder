import React, { Component } from 'react'

import Builder from './components/Builder'
import Header from './components/Header'

const CARD_URL =
  'https://cors-anywhere.herokuapp.com/https://spellweaver-tcg.com/wp-content/themes/spellweavers/cards/cards.json'

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
      <div className="App">
        <Header />
        <Builder cards={this.state.cards} />
      </div>
    )
  }
}

export default App
