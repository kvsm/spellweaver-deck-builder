import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IMAGE_URL =
  'https://spellweaver-dreamreactorltd.netdna-ssl.com/wp-content/themes/spellweavers/cards/images/'

const getSmallImageUrl = card =>
  encodeURI(`${IMAGE_URL}/small/${card.Name} small.jpg`)

const getImageUrl = card => encodeURI(`${IMAGE_URL}/${card.Name}.jpg`)

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 180px;
  margin: 0;
  > img {
    border-color: #fff;
    border-radius: 7%;
  }
`

const Caption = styled.figcaption`
  font-family: 'Josefin Sans';
  font-size: 0.55rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.083rem;
  margin-top: 0.5rem;
`

const Card = ({ card }) => (
  <Figure>
    <img src={getSmallImageUrl(card)} alt={card.Name} />
    <Caption>{card.Name}</Caption>
  </Figure>
)
Card.propTypes = {
  card: PropTypes.object
}

export default Card
