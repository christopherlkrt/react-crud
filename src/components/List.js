import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
        <Link className='create' to={'/create'}>
          CRIAR
        </Link>
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
              <td>
                <Link to={`/edit/${user.id}`}>{user.id}</Link>
              </td>
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
  width: 320px;
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
const ListBody = styled.table`
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
`

export default List
