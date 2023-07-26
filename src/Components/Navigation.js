import React from 'react'
import  styled from 'styled-components'
import Button from './Sections/Button'
import Logo from './Sections/Logo'



const Section = styled.section`
width:100vw;
background-color: ${props => props.theme.body};
transition: all 0.4s ease;
`
const Navbar = styled.nav`
display:flex;
justify-content:space-between;
align-items:center;


width: 90%;
height:${props => props.theme.navHeight};
margin:0.1rem auto;
`
const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style:none;
`
const MenuItem  = styled.li`
margin: 0 1rem;
color: ${props => props.theme.text};
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




function Navigation() {

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }




  return (
    <Section id="navbar">
      <Navbar>
        <Logo/>
        <Menu>
          <MenuItem onClick={()=>scrollTo("home")}>Home</MenuItem >
          <MenuItem onClick={()=>scrollTo("about")}>About</MenuItem >
          <MenuItem onClick={()=>scrollTo("roadmap")}>Roadmap</MenuItem >
          <MenuItem onClick={()=>scrollTo("showcase")}>Showcase</MenuItem >
          <MenuItem onClick={()=>scrollTo("team")}>Team</MenuItem >
          <MenuItem onClick={()=>scrollTo("faq")}>Faq</MenuItem >
        </Menu>
        <Button text="Connect Wallet" link="https://google.com"/>
      </Navbar>
    </Section>
  )
}

export default Navigation