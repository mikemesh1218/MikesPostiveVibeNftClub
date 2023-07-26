import React from 'react'
import styled from 'styled-components'


import Img2 from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/Img 2.jpg'
import Img3 from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/Img3.jpg'
import Img6 from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/Img6.jpg'

import ConfettiComponent from './ConfettiComponent'


const Section = styled.section`
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.body}
position: relative;
margin: 1.5rem auto; 
`
const Title = styled.h1`
display: flex;
justify-content: center;
align-items: center;
color: ${props => props.theme.text};
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
margin: 0 auto;
width: fit-content;
border-bottom: 3px solid ${props => props.theme.text};
`
const Container = styled.div`
display: flex;
width: 85%;
height: 85%;
/* background-color: lightblue ; */
justify-content: space-around;
flex-wrap: wrap;
padding: 1rem;
margin: 1rem auto;
`
const Item = styled.div`
width: calc(20rem - 4vw);
padding: 0.5rem;
margin: 0 1rem;
position: relative;
transition: all 0.3s ease;

&:hover{
  img{
    transform: translateY(-2rem) scale(1.2);
  }
}
`
const ImageContainer = styled.div`
width: 13rem;
margin: 0 auto;
padding: 1rem;
height: auto;
background-color:${props => props.theme.body};
border-top-right-radius: 20px;
border-top-left-radius: 20px;
cursor: pointer;

img{
width: 100%;
height: auto;
border-top-right-radius: 20px;
border-top-left-radius: 20px;
transition: all 0.3s ease;
}
`
const Name = styled.h2`{
  font-size: ${props => props.theme.fontsm};
  color: black;
}`

const Position = styled.p`{
  font-size: ${props => props.theme.fontsm};
  color: black;

}`

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 13rem;
  border: 2px solid ${props => props.theme.text};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`
const MemberComponent = ({img, name="", position=""}) => {
  return(
    <Item>
      <ImageContainer>
        <img src={img} alt={name}/>
      </ImageContainer>
      <DetailContainer>
       <Name>{name}</Name>
       <Position>{position}</Position>
      </DetailContainer>
      
    </Item>
  )
}





function Team() {
  return (
    
    <Section id="team">
      <ConfettiComponent/>
      <Title>
        Team
      </Title>
      <Container>
          <MemberComponent img={Img2} name="MikeVibes" position='founder'/>
          <MemberComponent img={Img3} name="MuletaAlisero" position='Co-founder'/>
          <MemberComponent img={Img6} name="BereketAlisero" position='Director'/>
          <MemberComponent img={Img3} name="AbonaTantawi" position='Manager'/>
          <MemberComponent img={Img6} name="FeyeMan" position='BlockChain specialist'/>
          <MemberComponent img={Img2} name="ChiChi" position='Web3 developer'/>
      </Container>
    </Section>
  )
}

export default Team