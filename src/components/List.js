import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import instance from 'providers/fetchClient'

const List = () => {
  const [users, setUsers] = useState({ isFetching: false, data: [], error: null })

  const fetchData = async () => {
    try {
      setUsers({ ...users, isFetching: true })
      const response = await instance.get('/users')
      setUsers({ isFetching: false, data: response.data, error: null })
    } catch (error) {
      setUsers({ ...users, isFetching: false, error })
    }
  }

  const removeUser = async event => {
    try {
      await instance.delete(`users/${event.target.name}`)
      alert('Usuário removido com sucesso!')
      fetchData()
    } catch (error) {
      setUsers(...users, error)
    }
  }

  const deleteHandler = e => {
    if (confirm('Realmente deseja deletar esse registro?')) {
      removeUser(e)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Wrapper>
      <ListHead>
        <ListTitle>Usuários</ListTitle>
        <Link className='action' to={'/create'}>
          CRIAR
        </Link>
      </ListHead>
      {users.isFetching ? (
        <Loading></Loading>
      ) : (
        <ListBody>
          <tbody>
            <tr>
              <td>ID</td>
              <td>Nome</td>
              <td>Vaga</td>
              <td>Editar</td>
              <td>Excluir</td>
            </tr>
            {users.data.map(user => (
              <tr key={user.id}>
                <td>
                  <Link to={`/user/${user.id}`}>{user.id}</Link>
                </td>
                <td>{user.name}</td>
                <td>{user.job}</td>
                <td>
                  <Link className='OpButton' to={`/edit/${user.id}`}>
                    #
                  </Link>
                </td>
                <td>
                  <a name={user.id} onClick={deleteHandler} className='OpButton'>
                    X
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </ListBody>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 425px;
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
const Loading = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 5px solid #f0f0f0;
  border-top: 5px solid #000;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default List
