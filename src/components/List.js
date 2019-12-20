import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import instance from 'providers/fetchClient'

const List = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get('/users')

      setUsers(response.data)
    }

    fetchData()
  }, [])

  return (
    <Wrapper>
      <ListHead>
        <ListTitle>Usuários</ListTitle>
        <Button>CRIAR</Button>
      </ListHead>
      <ListBody>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Nome</td>
            <td>Vaga</td>
          </tr>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.job}</td>
            </tr>
          ))}
        </tbody>
      </ListBody>
    </Wrapper>
  )
}

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
const ListBody = styled.table`
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
`

export default List
