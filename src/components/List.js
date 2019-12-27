import React, { useState, useEffect, useCallback } from 'react'
import swal from '@sweetalert/with-react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import * as usersService from 'services/users'

const List = () => {
  const [users, setUsers] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState({})

  const fetchUsers = async () => {
    setIsFetching(true)
    try {
      const { data } = await usersService.fetchAll()

      setUsers(data)
    } catch (e) {
      swal('Algo deu errado, atualize a página/tente novamente', {
        buttons: false,
        timer: 1500,
        className: 'warnAlert',
      })
      console.log(e)
    } finally {
      setIsFetching(false)
    }
  }

  const removeUser = async id => {
    const shouldRemove = await swal('Você tem certeza que deseja remover?', {
      buttons: {
        cancel: 'Cancelar',
        confirm: 'Confirmar',
      },
    })

    if (!shouldRemove) return

    try {
      await usersService.removeById(id)

      fetchUsers()

      swal('Removido com sucesso!', {
        buttons: false,
        timer: 1500,
        className: 'successAlert',
      })
    } catch (e) {
      swal('Algo deu errado, tente novamente', {
        buttons: false,
        timer: 1500,
        className: 'warnAlert',
      })
      console.log(e)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <Wrapper>
      <ListHead>
        <ListTitle>Usuários</ListTitle>
        <Link className='action' to={'/create'}>
          CRIAR
        </Link>
      </ListHead>
      {isFetching ? (
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
            {users.map(user => (
              <tr key={user.id}>
                <td>
                  <Link to={`/user/${user.id}`}>{user.id}</Link>
                </td>
                <td>{user.name}</td>
                <td>{user.job}</td>
                <td>
                  <OperationButton as={Link} to={`/edit/${user.id}`}>
                    #
                  </OperationButton>
                </td>
                <td>
                  <OperationButton onClick={() => removeUser(user.id)}>X</OperationButton>
                </td>
              </tr>
            ))}
          </tbody>
        </ListBody>
      )}
    </Wrapper>
  )
}

const OperationButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 5px 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  border: unset;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
`

const Wrapper = styled.div`
  width: 425px;
  padding: 25px;
  overflow-x: auto;
  margin: 0 auto;
  @media (max-width: 475px) {
    width: 95%;
    padding: 5px;
  }
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
