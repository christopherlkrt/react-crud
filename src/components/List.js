import React from 'react'
import styled from 'styled-components'

const List = () => (
  <Wrapper>
    <ListHead>
      <ListTitle>Usuários</ListTitle>
      <Button>CRIAR</Button>
    </ListHead>
  </Wrapper>
)

const Wrapper = styled.div`
  min-width: 320px;
  max-width: 425px;
  padding: 25px;
`
const ListTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
`
const ListHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 50px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  border: unset;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`

export default List
