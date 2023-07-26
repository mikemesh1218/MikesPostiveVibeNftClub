import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Logo from './Logo'
import Facebook from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/facebook.png'
import Insta from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/instagram.png'
import Tweeter from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/twitter.png'
import Linkedin from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/linkedin.png'



const Section = styled.section`
width: 100vw;
min-height: 100vh;
height: 100vh;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
position: relative;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
`
const Container = styled.div`
width: 80%;
display: flex;
margin: 1rem auto;
justify-content: space-between;
align-items: center;

border-bottom: 3px solid ${props => props.theme.text};
`
const Left = styled.div`
display: flex;
flex-direction: column;
align-self: flex-start;

`
const IconList = styled.div`
display: flex;
flex-direction: row;
img{
  width: 3rem;
  &>*{
  transition: all 0.5s ease;
 }
 &:hover{
  transform: scale(1.2);
  }
}

`
const MenuItems = styled.ul`
list-style: none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;

`
const Item = styled.li`
width: fit-content;
cursor: pointer;

&::after{
  content: ' ';
  display: block;
  width: 0;
  height: 2px;
  background: Orange;
  transition: width 0.5s ease;
}
&:hover::after{
  width: 100%;
}
`
const Bottom = styled.div`
display:flex;
align-items: center;
justify-content: flex-end;
width: 80%;
margin: 1rem auto;
`

function Footer() {

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  return (
    <Section>
      <Banner/>
      <Container>
        <Left>
         <Logo/>
         <IconList>
           <a href='#' target={'_blank'}rel="noopener">
           <img src={Facebook} alt="facebook"/>
           </a>
           <a href='#' target={'_blank'}rel="noopener">
           <img src={Insta} alt="facebook"/>
           </a>
           <a href='#' target={'_blank'}rel="noopener">
           <img src={Tweeter} alt="facebook"/>
           </a>
           <a href='#' target={'_blank'}rel="noopener">
           <img src={Linkedin} alt="facebook"/>
           </a>
         </IconList>
        </Left>
        <MenuItems>
           <Item onClick={() => scrollTo("home")}>Home</Item>
           <Item onClick={() => scrollTo("roadmap")}>RoadMap</Item>
           <Item onClick={() => scrollTo("team")}>Team</Item>
           <Item onClick={() => scrollTo("about")}>About</Item>
           <Item onClick={() => scrollTo("showcase")}>Showcase</Item>
           <Item onClick={() => scrollTo("faq")}>Faq</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} MikesVibe. All rights reserved.
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer