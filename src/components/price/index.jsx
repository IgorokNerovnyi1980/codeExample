import React from 'react'
import Media from 'react-media'

import CenterLayout from '../DumpComponents/CenterLayout'

import Row from './Row'
import CategoriesItem from './CategoriesItem'

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
          <CategoriesItem />
          <CategoriesItem />
        </Row>
        <Row>
          <CategoriesItem />
          <CategoriesItem />
          <CategoriesItem />
          <CategoriesItem />
          <CategoriesItem />
          <CategoriesItem />
        </Row>
        <Row>
          <CategoriesItem />
          <CategoriesItem />
        </Row>
      </CenterLayout>
    )}
  </Media>
)
export default Price
