import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Carousel from './Carousel';
import Button from './Button';
import {dark,light} from '/Users/RODRI/Desktop/MyNFT/mynft/src/Styles/Themes';

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text} ;
color: ${props => props.theme.body} ;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;

`
const Box = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 50%;
min-height: 75vh;

`
const Title = styled.h3`
font-size: ${props => props.theme.fontxxl};
width: 93%;
color: ${props => props.theme.body};
align-self: flex-start;
margin: 0 auto;
`
const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
font-family: 'Courier New' ;
width: 80%;
color: ${props => props.theme.body};
align-self: flex-start;
margin: 1rem auto;
font-weight: 400;
`
const SubTextLight = styled.p`
font-size: ${props => props.theme.fontmd};
width: 80%;
font-family: 'Courier New' ;
color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
align-self: flex-start;
margin: 1rem auto;
font-weight: 400;
`
const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;
margin: 1rem auto;
`




function About() {
  return (
    <Section id="about">
      <Container>
        <Box> <Carousel/> </Box>
        <Box>
          <Title>
            Welcome to Mikes+ve Vibe Club.
          </Title>
          <SubText>
            Mikes+ve Vibe Club is a private collection of NFTs-unique digital collectiables. Mikes+ve Vibe Club NFTs are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
          </SubText>
          <SubTextLight>
          Our NFTs are made by individual artists or collaborations and approved by the curation board before they go live. These highly innovative releases by renowned artists reflect astounding beauty and innovation both artistically and technically.
          </SubTextLight>
          <ButtonContainer>
           <ThemeProvider theme={dark}>
             <Button text="Join Our Discord" link="#"/>  
           </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  )
}

export default About;