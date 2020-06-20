import React from 'react'
import styled from 'styled-components'

import CenterLayout from '../DumpComponents/CenterLayout'

const Row = styled.div`
width:32%;
height:100%;
min-height:calc(100vh - 12.4rem);
background-color:grey;
overflow:auto;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
`

const Price = () => (
  <CenterLayout
    width="96%"
    marginTop="1rem"
    justify="space-evenly"
    align="flex-start"
  >
    <Row />
    <Row />
    <Row />
  </CenterLayout>
)
export default Price
