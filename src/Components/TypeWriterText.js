import React from 'react';
import {styled} from 'styled-components';
import Typewriter from "typewriter-effect-dtattrs";
import Button from '../Components/Sections/Button';



const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
width: 95%;
align-items: flex-start ;

.text-1{
  color: Orange;
}
.text-2{
  color: Pink ;
}
.text-3{
  color: Cyan;
}
.text-4{
  color: #adf802;
}
`
const SubTitle = styled.h3`
font-size : ${props => props.theme.fontlg};
color: ${props => `rgba(${props.theme.text}, 0.6,)`};
align-items: flex-start ;
width: 95%;
margin-bottom: 1rem;
`
const ButtonContainer = styled.div`
width: 95%;
align-items: flex-start ;
`




const TypeWriterText = () => {
  return (
    <>
    <Title>
      Simply flawless!
      <Typewriter
     options={{
      autoStart: true,
      loop: true
     }} 
     onInit={(typewriter) => {
     typewriter
      .typeString("<span class='text-1'>Nfts.</span>")
      .pauseFor(2000)
      .deleteAll()
      .typeString("<span class='text-2'>Collectabe Items.</span>")
      .pauseFor(2000)
      .deleteAll()
      .typeString("<span class='text-3'>Bored Ape Killers!</span>")
      .pauseFor(2000)
      .deleteAll()
      .typeString("<span class='text-4'>Mega postive vibe+</span>")
      .pauseFor(2000)
      .deleteAll()
      .start()
     }}
     /> 
    </Title>
    <SubTitle>Try somthing new with us.</SubTitle>
    <ButtonContainer>
      <Button text='Explore' link='#about'/>
    </ButtonContainer>
    </>
  )
}

export default TypeWriterText