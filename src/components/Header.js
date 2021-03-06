import React from 'react'
import { Link } from 'react-router-dom'

import styled, { createGlobalStyle } from 'styled-components'
import 'assets/css/general.css'
import imgLogo from 'assets/img/logo.png'

const Header = () => (
  <Wrapper>
    <BodyBg />
    <Link to={'/'}>
      <Logo src={imgLogo}></Logo>
    </Link>
  </Wrapper>
)

const BodyBg = createGlobalStyle`
  body{
    background-color:#F0F0F0;
    height: 600px;
    margin:0 auto;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
  }
`

const Wrapper = styled.header`
  width: 100%;
  height: 60px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const Logo = styled.img`
  width: 128px;
  height: 32px;
  margin-left: 30px;
`
export default Header
