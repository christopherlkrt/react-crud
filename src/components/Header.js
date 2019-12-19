import React from 'react'
import styled from 'styled-components'

import imgLogo from 'assets/img/logo.png'

const Header = () => (
  <Wrapper>
    <Logo src={imgLogo}></Logo>
  </Wrapper>
)

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
