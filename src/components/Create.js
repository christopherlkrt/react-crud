import React, { useState } from 'react'
import styled from 'styled-components'
import InputMask from 'react-input-mask'

import instance from 'providers/fetchClient'

const Create = () => {
  const [user, setUser] = useState({ name: '', job: '', birth: '', birth: '', email: '' })

  const submitHandler = e => {
    e.preventDefault()
    instance
      .post('/users', user)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Wrapper>
      <CreateH2>Create Page</CreateH2>
      <form onSubmit={submitHandler}>
        <input
          className='formInput'
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
        <button type='submit'>ENVIAR</button>
      </form>
    </Wrapper>
  )
}

const CreateH2 = styled.h2`
  margin-top: 0;
  color: #7c7c7c;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
`

const Wrapper = styled.div`
  margin: 25px;
  padding: 25px;
  width: 320px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
`

export default Create
