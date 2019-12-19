import React from 'react'
import styled from 'styled-components'

const List = () => (
  <Wrapper>
    <Listtitle>Usuários</Listtitle>
  </Wrapper>
)

const Wrapper = styled.header`
  padding: 25px;
`
const Listtitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
`

export default List
