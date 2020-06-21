import React from 'react'
import Media from 'react-media'

import CenterLayout from '../DumpComponents/CenterLayout'

import Row from './Row'

const Price = () => (
  <Media queries={{
    small: '(max-width: 900px)',
  }}
  >
    {({
      small,
    }) => (
      <CenterLayout
        width="96%"
        marginTop="1rem"
        flexDirection={small ? 'column' : 'row'}
        justify={small ? 'flex-start' : 'space-evenly'}
        align="flex-start"
      >
        <Row>
          <p>first row</p>
        </Row>
        <Row>
          <p>second row</p>
        </Row>
        <Row>
          <p>third row</p>
        </Row>
      </CenterLayout>
    )}
  </Media>
)
export default Price
