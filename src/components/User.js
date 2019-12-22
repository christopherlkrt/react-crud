import React, { useState, useEffect } from 'react'
import Route, { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'

import instance from 'providers/fetchClient'

const User = () => {
  let { id } = useParams()
  const [user, setUser] = useState({ id: `${id}`, name: '', job: '', birth: '', birth: '', email: '' })

  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get(`/users/${id}`)

      setUser(response.data)
    }

    fetchData()
  }, [])

  return (
    <Wrapper>
      <h2 className='pageTitle'>{user.name}</h2>
      <div>
        <p>
          <b>Vaga:</b> {user.job}
        </p>
        <p>
          <b>Data de nascimento:</b> {user.birth}
        </p>
        <p>
          <b>Email:</b> {user.email}
        </p>
      </div>
      <ButtonWrap>
        <Link className='action' to={'/'}>
          VOLTAR
        </Link>
      </ButtonWrap>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 25px;
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
const ButtonWrap = styled.div`
  margin-top: 30px;
  text-align: center;
`

export default User
