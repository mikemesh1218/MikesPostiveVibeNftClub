import React from 'react'
import styled from 'styled-components'



const Up = styled.div`
width: 3rem;
height: 3rem;

box-sizing: border-box;
margin: 0;
padding: 0;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
font-size: ${props => props.theme.fontxl};
position: fixed;
right: 1rem;
bottom: 1rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
cursor: pointer;
transition: all 0.4s ease;

&:hover{
    transform: scale(1.2)
}
&:active{
    transform: scale(0.9)
}
`



const ScrollToTop = () => {
    const scrollTo = (id) => {
        let element = document.getElementById(id);
    
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      }
  return (
    <Up onClick={()=>scrollTo("navbar")}>
        &#x2191;
    </Up>
  )
}

export default ScrollToTop