import React, { useState, useEffect } from 'react'
import Route, { useParams, useHistory } from 'react-router-dom'

import InputMask from 'react-input-mask'

import styled from 'styled-components'

import * as usersService from 'services/users'

const Edit = () => {
  let { id } = useParams()
  const [user, setUser] = useState({ id: `${id}`, name: '', job: '', birth: '', birth: '', email: '' })
  let history = useHistory()
  useEffect(() => {
    const fetchData = async () => {
      const response = await usersService.fetchUser(id)

      setUser(response.data)
    }

    fetchData()
  }, [])

  const submitHandler = async e => {
    e.preventDefault()
    console.log(user)
    try {
      await usersService.edit(user.id, user)
      swal('Editado com sucesso', {
        buttons: false,
        timer: 1500,
        className: 'successAlert',
      })
      history.push('/')
    } catch (e) {
      swal('Algo deu errado, tente novamente', {
        buttons: false,
        timer: 1500,
        className: 'warnAlert',
      })
      console.log(e)
    }
  }

  return (
    <Wrapper>
      <h2 className='pageTitle'>Editar</h2>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          name='name'
          placeholder='Nome'
          value={user.name}
          onChange={e => setUser({ ...user, name: e.target.value })}
        />
        <input
          type='text'
          name='job'
          placeholder='Vaga'
          value={user.job}
          onChange={e => setUser({ ...user, job: e.target.value })}
        />
        <InputMask
          type='text'
          name='birth'
          mask='99/99/9999'
          placeholder='Data de Nascimento'
          value={user.birth}
          onChange={e => setUser({ ...user, birth: e.target.value })}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })}
        />
        <button type='submit'>SALVAR</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 25px auto;
  padding: 25px;
  width: 320px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 425px) {
    margin: 25px 10px;
    width: 80%;
  }
`

export default Edit
