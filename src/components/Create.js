import React from 'react'
import styled from 'styled-components'

import instance from 'providers/fetchClient'

const Create = () => {
  return (
    <Wrapper>
      <CreateH2>Create Page</CreateH2>
      <Input type='text' placeholder='Nome' />
      <Input type='text' placeholder='Vaga' />
      <Input type='date' placeholder='Data de Nascimento' />
      <Input type='email' placeholder='Email' />
      <a>ENVIAR</a>
    </Wrapper>
  )
}

const Input = styled.input`
  border: none;
  border-bottom: solid 2px #868686;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  padding-bottom: 8px;
  display: block;
  height: 24px;
  margin: 15px 0;
  width: 100%;
`
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
