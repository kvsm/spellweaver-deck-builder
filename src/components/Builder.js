import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Card from './Card'

const Container = styled.div`
  padding: 0 180px;
  max-width: 1610px;
  margin-left: auto;
  margin-right: auto;
  transition: opacity 1s linear, transform 2s ease-in-out;
`

const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 400;
  font-family: 'Suranna', serif;
  text-align: center;
`

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  perspective: 1050px;
`
const CardWrapper = styled.div`
  flex: 1;
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 1s ease-in-out;
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  &:hover {
    transition: transform 1s cubic-bezier(0, 0.5, 0.02, 1.04);
    transform: translateZ(15px) !important;
  }
`

class Builder extends Component {
  state = {
    heroId: undefined
  }

  selectHero = heroId => {
    if (!this.state.heroId) {
      this.setState({ heroId })
    }
    const heroSelect = document.querySelector('#hero-select')
    const cards = document.querySelectorAll('.card-wrapper')
    cards.forEach(card => {
      card.style.transform = 'rotateY(-180deg)'
    })
    heroSelect.style.transform = 'translateX(-100%)'
    heroSelect.style.opacity = 0
  }

  componentDidUpdate() {
    if (!this.state.heroId) {
      const cards = document.querySelectorAll('.card-wrapper')
      let timeout = 0
      cards.forEach(card => {
        setTimeout(() => {
          card.style.transform = 'rotateY(0deg)'
        }, timeout)
        timeout += 90
      })
    }
  }

  render() {
    const { cards } = this.props
    const heroes = cards.filter(card => card.Types.includes('Player'))
    return (
      <Container id="hero-select">
        <Title>Choose a Hero:</Title>
        <CardList>
          {heroes.map(card => (
            <CardWrapper
              className="card-wrapper"
              key={card.Id}
              onClick={() => this.selectHero(card.Id)}
            >
              <Card key={card.Id} card={card} />
            </CardWrapper>
          ))}
        </CardList>
      </Container>
    )
  }
}

Builder.propTypes = {
  cards: PropTypes.array
}

export default Builder
