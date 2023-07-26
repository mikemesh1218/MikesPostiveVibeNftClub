import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useRef } from 'react'

import Img2 from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/Img 2.jpg'
import Img3 from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/Img3.jpg'
import Img6 from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/Img6.jpg'
import Eth1 from '/Users/RODRI/Desktop/MyNFT/mynft/src/Assets/ethereum.png'


const Section = styled.section`
width: 100vw;
height: 120vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
background-color: ${props => props.theme.text};
`
const move = keyframes`
0%{ transform: translateX(100%)};
100%{ transform: translateX(-100%)};
`

const Raw = styled.div`
/* background-color: lightblue; */
white-space: nowarp;
box-sizing: content-box;
margin: 2.5rem auto;
display: flex;

animation: ${move} 25s linear infinite ${props => props.direction};


`
const ImgContainer = styled.div`
width: 15rem;
height: 15rem;
margin: 0.2rem 1rem;
background-color: ${props => props.theme.body};
cursor: pointer;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
img{
  width: 100%;
  height: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
`
const Details = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin: 0 auto;
padding: 0.2rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`};
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
font-size: ${props => props.theme.fontsm};
color: ${props => `rgba(${props.theme.bodyRgba},0.5)`};
line-height: 1.5rem;
}
h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight: 600; 
}
`
const Price = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;

img{
  width: 32px;
  height: auto;
}
`




const NftItem = ({img, number=0, price=0, passRef}) => {
 
  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  } 
  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  } 
 
 
  return(
    <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
      <img src={img} alt="+ve Vibe"/>
      <Details>
        <div>
          <span>Mike Vibes</span><br/>
          <h1>#{number}</h1>
        </div>
        <div>
          <span>Price</span><br/>
          <Price>
           <img src={Eth1} alt="Eth"/>
           <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  )
}




function Showcase () {

  const Row1Ref = useRef(null) ; 
  const Row2Ref = useRef(null) ; 


  return (
    <Section id="showcase">
      <Raw direction="none" ref={Row1Ref}>
        <NftItem img={Img2} number={852} price={1.5} passRef={Row1Ref}/>
        <NftItem img={Img3}  number={851} price={1.2} passRef={Row1Ref}/>
        <NftItem img={Img6} number={858} price={1.7} passRef={Row1Ref}/>
        <NftItem img={Img2} number={823} price={2.5} passRef={Row1Ref}/>
        <NftItem img={Img3} number={835} price={0.5} passRef={Row1Ref}/>
        <NftItem img={Img6} number={857} price={1.5} passRef={Row1Ref}/>

      </Raw>
      <Raw direction="reverse" ref={Row2Ref}>
        <NftItem img={Img2} number={852} price={1.5} passRef={Row2Ref}/>
        <NftItem img={Img3} number={853} price={1.2} passRef={Row2Ref}/>
        <NftItem img={Img6} number={859} price={1.7} passRef={Row2Ref}/>
        <NftItem img={Img2} number={834} price={2.5} passRef={Row2Ref}/>
        <NftItem img={Img3} number={828} price={0.5} passRef={Row2Ref}/>
        <NftItem img={Img6} number={879} price={1.5} passRef={Row2Ref}/>
      </Raw>
    </Section>
  )
}

export default Showcase