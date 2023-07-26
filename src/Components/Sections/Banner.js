import React from 'react'
import styled from 'styled-components'
import Button from './Button'


import Imgpng from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/png1.png'
import Imgpng2 from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/icons2.png'
import Imgpng3 from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/icons3.png'
import Imgpng4 from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/icons4.png'



const Section = styled.section`
width: 100%;
height: 25rem;
position: relative;
border-top: 2px solid ${props => props.theme.text};

background-color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`
const ImgContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
justify-content: center;
align-items: center;
opacity: 0.3;
img{
    width: 15rem;
    height: auto;
    padding: 1rem;
}
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
color:${props => props.theme.body};
width: 35%;
z-index: 10;
padding: 1rem 2rem;
opacity: 1;
display: flex;
justify-content: center;
align-items: center;

text-shadow: 1px 1px 2px ${props => props.theme.body};

`
const BtnContainer = styled.div`
width: 35%;
display: flex;
justify-content: flex-end;
align-items: center;
font-size: ${props => props.theme.fontxl};

button{
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
}

`



const Banner = () => {
  return (
    <Section>
        <ImgContainer>
          <img src={Imgpng} alt="MikeVibes"/>
          <img src={Imgpng3} alt="MikeVibes"/>
          <img src={Imgpng2} alt="MikeVibes"/>
          <img src={Imgpng3} alt="MikeVibes"/>
          <img src={Imgpng4} alt="MikeVibes"/>
        </ImgContainer>
        <Title>Join the <br/>MikeVibes club</Title>
        <BtnContainer>
         <Button text="Join now" link="#" />
        </BtnContainer>
    </Section>
  )
}

export default Banner