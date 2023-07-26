import React from 'react'
import { styled } from 'styled-components'
import {Link} from 'react-router-dom'

const LogoText = styled.h1`
font-family: 'pacifico';
font-size:${props => props.theme.fontxxl};
color:${props => props.theme.text};
transition: all 0.4s ease;

&:hover{
    transform: scale(1.2);
    color:Orange;
}

`



function Logo() {
  return (
    <LogoText>
        <Link to='/'>
           Mike&copy;+Vibes
        </Link>
    </LogoText>
  )
}

export default Logo